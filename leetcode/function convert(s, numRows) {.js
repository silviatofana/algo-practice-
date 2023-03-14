function convert(s, numRows) {
    if (numRows === 1) {
      return s; // If numRows is 1, the output is the same as input
    }
  
    const rows = []; // Create an array to hold the rows
    for (let i = 0; i < numRows; i++) {
      rows.push(""); // Initialize each row as an empty string
    }
  
    let row = 0; // Start at the first row
    let step = 1; // Initialize the step to be down
    for (const char of s) {
      rows[row] += char; // Add the current character to the current row
      if (row === 0) {
        step = 1; // If at the top row, change step to be down
      } else if (row === numRows - 1) {
        step = -1; // If at the bottom row, change step to be up
      }
      row += step; // Move to the next row
    }
  
    let result = ""; // Initialize the result as an empty string
    for (const row of rows) {
      result += row; // Concatenate all the rows
    }
    return result;
  }
  