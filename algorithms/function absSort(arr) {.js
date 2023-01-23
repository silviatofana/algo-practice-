function absSort(arr) {
	/**
	@param arr: integer[]
	@return: integer[]
	input:  arr = [2, -7, -2, -2, 0]
  output: [0, 2, 2, 2, 7]

	// your code goes here Math.abs(-2) return 2
  */
  //BUILD COMPARISON FUNCTION 
  function absoluteValueComparison(a,b) {
    //sort bu absolute value 
    if(Math.abs(a) < Math.abs(b)) {
      return -1;
    } else if(Math.abs(a) > Math.abs(b)){
      return 1;
          
      //sort identical absolute value in numerical order
   } else if (a<b){
     return -1;
   }else if(a>b) {
     return 1;
   } else {
     return 0;
   }
  }
  //call comparison function as callback in array sort
  return arr.sort(absoluteValueComparison);
}
