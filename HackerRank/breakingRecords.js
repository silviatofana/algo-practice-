// let max = 0,min = 0, minRecord = scores[0], maxRecord = scores[0];
// for(let i = 1; i < scores.length; i++){
// if(scores[i] > maxRecord){
// max++;
// maxRecord = scores[i];
// }else if(scores[i] < minRecord){
// min++;
// minRecord = scores[i];
// }
// }
// let newArr = [max,min];
// return newArr

function breakingRecords(scores) {
  // Write your code here
  let highestScore = scores[0];
  let lowestScore = scores[0];
  let highRecord = 0;
  let lowRecord = 0;


  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highRecord++;
      highestScore = scores[i];
    } else if (scores[i] < lowestScore) {
      lowRecord++;
      lowestScore = scores[i];
    }
  }

  let record = [highRecord, lowRecord];
  console.log(record);
}


breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);
