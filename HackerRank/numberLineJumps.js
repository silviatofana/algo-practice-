function kangaroo(x1, v1, x2, v2) {
  let result = '';
  let firstRun = x1;
  let secondRun = x2;

  // Write your code here

  for (let i = 0; i <= 10000; i++) {
    firstRun += v1;
    secondRun += v2;

    if (secondRun === firstRun) {
      result = 'YES'
      break;
    } else {
      result = 'NO'
    }
  }
  console.log(firstRun, secondRun);
  console.log(result);
}


kangaroo(0, 2, 5, 3);