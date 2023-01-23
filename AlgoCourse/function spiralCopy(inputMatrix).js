/** 
https://drive.google.com/file/d/1gxK_Y6JRs_Uv98FunobtZSKrbfFWrA-g/view
Create an outer function
Declare our results array
Call an inner function pass in our matrix and initial start point
traverse the matrix and passin current cell into our results array 
following specific direction until we hit out of bounds or previously seen cell
then we will change direction and traversematrix until we hit out of bounds or previously seen cell


const START_ROW = 0;
const START_COL = 0;

const RIGHT = [0,1];

const getCellStr = (row, col) => `${row}, ${col}`;

const isInBounds = (row, col, matrix) => {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  
  const rowInBounds = row >= 0 && row < numRows;
  const colInBounds = col >= 0 && col < numCols;
  
  return rowInBounds && colInBounds;
}

const checkIfNextNodeIsValid = (row, col, inputMatrix, visited, direction) => {
  const [rowChange, colChange] = direction;
  
  const potentialNeighborRow = row + rowChange;
  const potentialNeighborCol = col + colChange;
  
  const neighborCellStr = getCellStr(potentialNeighborRow, potentialNeighborRow);
  
  if (visited.has(neighborCellStr)) return false;
  
  if (!isInBounds(potentialNeighborRow, potentialNeighborCol, inputMatrix)) return false;
  
  return true;
}

const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

const changeDirection = currDirection => {
  
}

const fillValuesInSpiralOrder = (row, col, inputMatrix, valuesInSpiralOrder, visited, direction, directionIdx) => {

  const currCellValue = inputMatrix[row][col];
  
  const currCellStr = getCellStr(row, col);
  
  valuesInSpiralOrder.push(currCellValue);
  visited.add(currCellStr);
  
  const nextNodeFollowingCurrDirectionIsValid = checkIfNextNodeIsValid(row, col, inputMatrix, visited, direction);
  
  const [rowChange, colChange] = direction;
  
  const potentialNeighborRow = row + rowChange;
  const potentialNeighborCol = col + colChange;
  
  if (nextNodeFollowingCurrDirectionIsValid) fillValuesInSpiralOrder(potentialNeighborRow, potentialNeighborCol, inputMatrix, valuesInSpiralOrder, visited, direction);
  
  if (!nextNodeFollowingCurrDirectionIsValid) changeDirection(directionIdx);
}


const spiralCopy = inputMatrix => {
  const valuesInSpiralOrder = [];
  
  const visited = new Set();
  
  const startDirection = directions[0];
  
  fillValuesInSpiralOrder(START_ROW, START_COL, inputMatrix, valuesInSpiralOrder, visited, startDirection, 0);
}

func spiralCopy(inputMatrix: [[Int]]) -> [Int] {
    var result = [Int]()
    var pos = (row: 0, col: 0)
    var rowEnd = inputMatrix.count - 1
    var colEnd = inputMatrix[0].count - 1
    var isComplete: Bool {
        return rowEnd < 0 || colEnd < 0
    }
    
    while true {
        // move right
        guard !isComplete else { break }
        for _ in 0...colEnd {
            if !result.isEmpty {
                pos.col += 1
            }
            result += [inputMatrix[pos.row][pos.col]]
        }
        rowEnd -= 1

        // move down
        guard !isComplete else { break }
        for _ in 0...rowEnd {
            pos.row += 1
            result += [inputMatrix[pos.row][pos.col]]
        }
        colEnd -= 1
        
        // move left
        guard !isComplete else { break }
        for _ in (0...colEnd).reversed() {
            pos.col -= 1
            result += [inputMatrix[pos.row][pos.col]]
        }
        rowEnd -= 1
        
        // move up
        guard !isComplete else { break }
        for _ in (0...rowEnd).reversed() {
            pos.row -= 1
            result += [inputMatrix[pos.row][pos.col]]
        }
        colEnd -= 1
    }
    
    return result
}*/

function spiralCopy(inputMatrix) {
    // your code goes here
    // matrix = n x m where n = left to right, m is top to bottom
    let left = 0;
    let right = inputMatrix[0].length - 1;
    let top = 0;
    let bottom = inputMatrix.length - 1;
    let solutionArray = [];
    
    // while loop, what's the condition?
    // while (topRow <= btmRow AND leftCol <= rightCol)
    // while left <= n, top <= m
    // for loop from left to right // right to left
    // push current element to array
    // top++
    for (let i = left; i < right; i++) {
    // i = 0
    let element = inputMatrix[top][i]; // x, y
    solutionArray.push(element);
    }
    top++;
    
    // for loop from top to bottom // top to bottom
    
    // right--
    for (let i = top; i < bottom; i++) {
    // i = 0
    let element = inputMatrix[right][i];
    solutionArray.push(element);
    }
    top++;
    
    // for loop from right to left // right to left
    // bottom--
    //for loop from bottom to top // bottom to top
    // left++
    }
    
    // let test = [ [1, 2, 3, 4, 5],
    // [6, 7, 8, 9, 10],
    // [11, 12, 13, 14, 15],
    // [16, 17, 18, 19, 20] ];
    
    // spiralCopy(test);
    
    /*
    inputs: 2d array of intergers
    output: 1d array of integers, spiraled
    constraints: length >= 1
    edge cases: length of 1
    
    nested for loop
    
    figure out a way to spiral around
    
    [0, 0] = 1
    [0, 1] = 6
    
    let test = [ [1, 2, 3, 4, 5], get to the end of the array go down
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20] ]
    
    last elements ->
    [4, 0]
    [4, 1]
    [4, 2]
    [4, 3]
    
    iterate top to bottom
    matrix = n x m where n = left to right, m is top to bottom
    left = 0
    right = top row length - 1
    top = 0
    bottom = length of row - 1
    
    for loop from left to right // right to left
    // push current element to array
    // top++
    for loop from top to bottom // top to bottom
    // right--
    for loop from right to left // right to left
    // bottom--
    for loop from bottom to top // bottom to top
    // left++
    
    once we do a pass, increment counter
    
    traverse(inputArray, x)
    loop through up and down? []
    
    two functions?
    traverse right
    left, down, up
    input parameters -> the elements to traverse
    how to give that function?
    
    time: n x m
    space: n x m