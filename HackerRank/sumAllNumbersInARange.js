function sumAll(arr) {

  let first = arr[0]
  let last = arr.at(-1)

  const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
  let numsToSumUp = range(first, last)

  const reducer = (accumulator, current) => accumulator + current;
  let result = numsToSumUp.reduce(reducer)


  console.log(result)

}

sumAll([1, 4]);


function sumAll(arr) {
  let lowEnd = Math.min(...arr);
  let highEnd = Math.max(...arr);

  // Get the sum of numbers btw low end and high end
  let list = [];

  for(let i = lowEnd; i <= highEnd; i++) {
    list.push(i)
  }

  console.log(list)

   
   const reducer = (accumulator, currentValue) => accumulator + currentValue;

   list = list.reduce(reducer)

  return list;
}


sumAll([1, 4]);

