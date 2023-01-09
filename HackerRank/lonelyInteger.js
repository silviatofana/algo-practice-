function lonelyinteger(a) {
  // Write your code here
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
    result ^= a[i];
  }
  return result;


}


console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1])) // 4