/* input:  arr = [0,2,3]
                  [0,1] => 3

output: 1
*/
function getDifferentNumber(arr){
    const n=arr.length;
    const mySet=new Set(arr);
    for(let i=0; i<n; i++){
      if(!mySet.has(i)){
        return i;
      }
    }
    return n
  }
  
  function getDifferentNumberOld(arr) {
    // your code goes here
    const n = arr.length;
    let temp, temp1
    for(let i=0; i<n;i++){
      temp = arr[i];
      while(temp<n && temp!=arr[temp]){
        temp1=arr[temp];
        arr[temp]=temp;
        temp=temp1;
      }
    }
    
    for (i=0;i<n;i++){
      if(i!=arr[i]){
        return i;
      }
    }
  }