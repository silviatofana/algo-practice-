function getIndexToIns(arr, num) {

  // arr.sort((a,b) => a -b )

  let spliceAt = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      spliceAt = arr.indexOf(arr[i])
      break;
    }
}

arr.splice(spliceAt, 0, num)
arr.sort((a,b) => a - b)
console.log(arr)
let indexNew  = arr.indexOf(num)
console.log(indexNew)

}

// getIndexToIns([40, 60], 50)
// getIndexToIns([10, 20, 30, 40, 50], 35)
getIndexToIns([2, 5, 10], 15)
