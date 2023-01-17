/* input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

function spiralCopy(inputMatrix):
    numRows = inputMatrix.length
    numCols = inputMatrix[0].length 
    
    topRow = 0
    btmRow = numRows - 1
    leftCol = 0
    rightCol = numCols - 1
    result = []

    while (topRow <= btmRow AND leftCol <= rightCol):
        # copy the next top row
        for i from leftCol to rightCol:
            result.push(inputMatrix[topRow][i])
        topRow++

        # copy the next right hand side column
        for i from topRow to btmRow:
            result.push(inputMatrix[i][rightCol])
        rightCol--

        # copy the next bottom row
        if (topRow <= btmRow):
            for i from rightCol to leftCol:
                result.push(inputMatri[btmRow][i])
            btmRow--

        # copy the next left hand side column
        if (leftCol <= rightCol):
            for i from btmRow to topRow:
                result.push(inputMatrix[i][leftCol])
            leftCol++

    return result
    
    Time Complexity: iterating over N∙M cells, where N is the number of rows and M the number of columns, and copying them into any array takes O(N∙M). Note that this is a linear time complexity since the size of the input is O(N∙M).

Space Complexity: we used an auxiliary array of size N∙M as a return value, hence the space complexity is O(N∙M). This is a linear space complexity since the size of the input is O(N∙M) as well.
    */

function spiralCopy(inputMatrix) {
    // your code goes here
    let minRow = 0;
    let minCol = 0;
    let maxRow = inputMatrix.length-1;
    let maxCol = inputMatrix[0].length-1;
  
    const result = [];
  
    while (minRow <= maxRow && minCol <= maxCol) {
      for (let i=minCol;i<=maxCol;i++) {
        result.push(inputMatrix[minRow][i]);
      }
      minRow++;
  
      for (let i=minRow;i<=maxRow;i++) {
        result.push(inputMatrix[i][maxCol]);
      }
      maxCol--;
  
      if (minRow <= maxRow) {
        for (let i=maxCol;i>=minCol;i--) {
          result.push(inputMatrix[maxRow][i]);
        }
        maxRow--;
      }
  
      if (minCol <= maxCol) {
        for (let i=maxRow;i>=minRow;i--) {
          result.push(inputMatrix[i][minCol]);
        }
        minCol++;
      }
    }
    return result;
  }
  
  /*
  Time Complexity: iterating over N∙M cells, where N is the number of rows and M the number of columns, and copying them into any array takes O(N∙M). Note that this is a linear time complexity since the size of the input is O(N∙M).
  Space Complexity: we used an auxiliary array of size N∙M as a return value, hence the space complexity is O(N∙M). This is a linear space complexity since the size of the input is O(N∙M) as well.
  */