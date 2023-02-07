function isToeplitz(arr) {
	/**
	@param arr: integer[][]
	@return: boolean
	*/

	// your code goes here
  
  for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr[i].length-1; j++){
      if(arr[i][j] !==arr[i+1][j+1]){
        return false;
      }
    }
  }
  return true;
}

/**

[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
 
*/