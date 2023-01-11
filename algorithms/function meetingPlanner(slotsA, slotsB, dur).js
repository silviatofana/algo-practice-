function meetingPlanner(slotsA, slotsB, dur) {
    // your code goes here
    let i = 0;
    let j = 0;
    
    while ( i < slotsA.length && j < slotsB.length) {
      let max = Math.max(slotsA[i][0], slotsB[j][0]);
      let min = Math.min(slotsA[i][1], slotsB[j][1]);
      if (max + dur <= min ) {
        return [max, max + dur];
      }
      if (slotsA[i][1] < slotsB[j][1]) {
        i++;
      } else {
        j++;
      }
     }
    
    return [];
  }