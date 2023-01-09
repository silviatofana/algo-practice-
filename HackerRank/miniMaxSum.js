/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  
  let minIndex = arr.indexOf(min)
  let maxIndex = arr.indexOf(max)

  let minArray = [...arr]
  minArray.splice(maxIndex, 1)     


  let maxArray = [...arr]
  maxArray.splice(minIndex, 1)
       
  const reducer = (currentValue, Accumulator) => currentValue + Accumulator;
  console.log(minArray.reduce(reducer) + ' ' + maxArray.reduce(reducer))        
}

miniMaxSum([1, 2, 3, 4, 5])