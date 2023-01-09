function aVeryBigSum(ar) {
  // Write your code here
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  ar = ar.reduce(reducer)
  return ar
}

aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])

const arr = [1, 2, 3, 4];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));



