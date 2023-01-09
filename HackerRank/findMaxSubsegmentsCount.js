// Function Description
// findMaxSubsegmentsCount has the following parameter(s):
// int arr[n]:  the array of integers to partition
// Returns:
// int: the maximum number of contiguous subsegments in a valid set of partitions


function findMaxSubsegmentsCount (arr) {
  // Write your code here
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
    } else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }
  }
  if (count > max) {
    max = count;
  }
  return max;
}


console.log(findMaxSubsegmentsCount([2, 10, 5, 9]))
// Expected output: 2
// => 2