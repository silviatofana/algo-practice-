function spiralCopy(inputMatrix) {
    const numRows = inputMatrix.length;
    const numCols = inputMatrix[0].length;
    const result = [];
  
    let topRow = 0;
    let bottomRow = numRows - 1;
    let leftCol = 0;
    let rightCol = numCols - 1;
  
    while (topRow <= bottomRow && leftCol <= rightCol) {
      // Traverse the top row
      for (let col = leftCol; col <= rightCol; col++) {
        result.push(inputMatrix[topRow][col]);
      }
      topRow++;
  
      // Traverse the right column
      for (let row = topRow; row <= bottomRow; row++) {
        result.push(inputMatrix[row][rightCol]);
      }
      rightCol--;
  
      // Traverse the bottom row, if there is one
      if (topRow <= bottomRow) {
        for (let col = rightCol; col >= leftCol; col--) {
          result.push(inputMatrix[bottomRow][col]);
        }
        bottomRow--;
      }
  
      // Traverse the left column, if there is one
      if (leftCol <= rightCol) {
        for (let row = bottomRow; row >= topRow; row--) {
          result.push(inputMatrix[row][leftCol]);
        }
        leftCol++;
      }
    }
  
    return result;
  }