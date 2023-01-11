function getNumberOfIslanda(binaryMatrix) {
  let count = 0;
  for (let i = 0; i < binaryMatrix.length; i++) {
    for (let j = 0; j < binaryMatrix[i].length; j++) {
      if (binaryMatrix[i][j] === 1) {
        count++;
        dfs(binaryMatrix, i, j);
      }
    }
  }
  return count;
}