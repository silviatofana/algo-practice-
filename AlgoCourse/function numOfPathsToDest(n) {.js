function numOfPathsToDest(n) {
    let matrix = [];
  
  for (let i = 0; i < n; i++) {
       matrix[i] = [1];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let top = matrix[i-1][j] || 0;
      let left = matrix[i][j-1] || 0;
       matrix[i][j] = left + top;
     }
   }
   return matrix[n-1][n-1] || 1;
}
    