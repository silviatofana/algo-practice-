function arrayOfArrayProducts(arr) {
    // your code goes here
    /*input:  arr = [8, 10, 2]
  output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]
  [8 10 2]
  left:[1  8 80]
  righ:[20 2  1]
  
  input:  arr = [2, 7, 3, 4]
  output: [84, 24, 56, 42] # by calculating: [7*3*4, 2*3*4, 2*7*4, 2*7*3] */
    
    let n = arr.length;
    if(n<=1){
      return [];
    }
    let result = [];
    let product = 1;
    for (let i=0; i<n; i++){
      result.push(product);
      product*=arr[i];
    }
    product =1;
    for(let i=n-1; i>=0; i--){
      result[i]*=product;
      product*=arr[i];
    }
    return result;
  }