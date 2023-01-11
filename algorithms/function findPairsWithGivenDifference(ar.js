function findPairsWithGivenDifference(arr, k) {
    // your code goes her
   // since we don't allow duplicates, no pair can satisfy x - 0 = y
  
    if (k == 0) return [] 
    let res = []
    
    let diffMap = {}
    
    for (let val of arr) {
      diffMap[val - k] = val.toString()
    }
    
    for (let i = 0; i < arr.length; i++) {
      diffMap[arr[i]] && (res.push([parseInt(diffMap[arr[i]]), parseInt(arr[i])]))
    }
    
    return res
  }
    