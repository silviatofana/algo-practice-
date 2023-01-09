function jumpingOnClouds(c) {
  // Write your code here
  
  let jumps = 0;
  let ind = 0;

  do {
    jumps ++
    if (c[ind + 2] === 0) {
      ind +=2;
    } else if (c[ind + 2] === 1) {
      ind +=1;
    }
  } while (ind < c.length - 1)
  
  
  console.log(jumps)
 return jumps;
}


jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])
