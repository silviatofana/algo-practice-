function staircase(n) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n - i - 1; j++) {
      str += ' ';
    }
    for (let x = 0; x < i + 1; x++) {
      str += '#';
    }
    console.log(str);
  }
}

// N = 4
// SSS# i=0, S=3, #=1
// SS## i=1, S=2, #=2
// S### i=2, S=1, #=3
// #### i=3, S=0, #=4

staircase(10)