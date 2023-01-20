// 0040760889756
// silviatofana 
//                0  1  2   3    4
/* input:  arr = [4, 6, 10, 15, 16],  lim = 21

output: [3, 1] # since these are the indices of the
               # weights 6 and 15 whose sum equals to 21
*/

/*
  Input: [4,4], 8
  Output: [1,0]
*/
function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    let weights = {};
    let result = []
    for (let i = 0; i<arr.length;i++){
      let compliment = limit - arr[i];
      if (typeof weights[compliment] != "undefined") {
        return [i, weights[compliment]];
      } else {
        weights[arr[i]] = i;
      }
    }
    return [];
    
  }
  
  