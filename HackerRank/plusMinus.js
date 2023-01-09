function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  
  for (let i = 0; i < arr.length; i++) { 
      if (arr[i] === 0) {
          zero++
      } else if (arr[i] > 0) {
          positive++
      } else if (arr[i] < 0){
          negative++
      }
  }
  
  let positiveRatio = (positive/arr.length).toFixed(5)
  let negativeRatio = (negative/arr.length).toFixed(5)
  let zeroRatio = (zero/arr.length).toFixed(5)
  
  console.log(positiveRatio+"\n"+negativeRatio+"\n"+zeroRatio)
}