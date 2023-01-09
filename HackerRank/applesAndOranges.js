// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   // Write your code here
//   let applesOnHouse = 0
//   let orangesOnHouse = 0;
//   for (i = 0; i < apples.length; i++)  {
//     if (a + apples[i] >= s && a + apples[i]<= t) {
//       applesOnHouse++;
//       console.log(applesOnHouse)
//     }
//   }
//   for (j = 0; j < oranges.length; j++) {
//     if (b + oranges[j] <= t && b + oranges[j] >= s) {
//       orangesOnHouse++;
//       console.log(orangesOnHouse)
//     }
//   }
// }

// countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);




function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  let applesOnHouse = 0;
  let orangesOnHouse = 0;

  for (var i = 0; i < apples.length; i++) {
      if (a + apples[i] >= s && a + apples[i] <= t) {
          applesOnHouse++
      }
  }
  
  for (var j = 0; j < oranges.length; j++) {
      if (b + oranges[j] <= t && b + oranges[j] >= s) {
          orangesOnHouse++
      }
  }
  
  console.log(`${applesOnHouse}\n${orangesOnHouse}`)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
