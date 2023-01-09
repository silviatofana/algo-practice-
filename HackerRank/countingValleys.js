// function countingValleys(steps, path) {
//   // Write your code here
//   let valleys = 0;
//   let level = 0;
//   for (const step of path) {
//       let prev = level;
//       level = step === 'U' ? level + 1 : level - 1;
//       if (prev == -1 && level == 0) valleys++;
//       console.log(valleys)
//   }
//   return valleys
// }


// countingValleys(8,['U','U','D','D','D','D','U','U'])

function countingValleys(steps, path) {
  // Write your code here
  let valleys = 0;
  let level = 0;
  for (let i = 0; i <= path.length; i++) {
      let prev = level;
      level = path[i] === 'U' ? level + 1 : level - 1;
      if (prev == -1 && level == 0) valleys++;
      console.log(valleys)
  }
  return valleys
}

countingValleys(8,['U','U','D','D','D','D','U','U'])

