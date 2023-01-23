function findBusiestPeriod(data) {
    /* [ 1440084737, 4, 0 ] 
    1480640292
    input:  data = [ [1487799425, 14, 1], 
                   [1487799425, 4,  0],
                   [1487799425, 2,  0],
                   [1487800378, 10, 1],
                   [1487801478, 18, 0],
                   [1487801478, 18, 1],
                   [1487901013, 1,  0],
                   [1487901211, 7,  1],
                   [1487901211, 7,  0] ]
  
  output: 1487800378 # since the increase in the number of people
                     # in the mall is the highest at that point
    */
    
    let n = data.length
    let count = 0
    let maxCount = 0
    let maxperiodTime = 0
    
    for(let i=0; i<n;i++){
      if(data[i][2] ===1){
        count+=data[i][1];
      }else if(data[i][2] ===0){
        count-=data[i][1];
      }
      if(i<n-1&&data[i][0] === data[i+1][0]) {
        continue
      }
      if (count>maxCount) {
        maxCount = count
        maxPeriodTime = data[i][0]
      }
    }
    return maxPeriodTime
  }
  
  const data =  [ [1487799425, 14, 1], 
                   [1487799425, 4,  0],
                   [1487799425, 2,  0],
                   [1487800378, 10, 1],
                   [1487801478, 18, 0],
                   [1487801478, 18, 1],
                   [1487901013, 1,  0],
                   [1487901211, 7,  1],
                   [1487901211, 7,  0] ]
  
  console.log(findBusiestPeriod(data))