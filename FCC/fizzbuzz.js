const palidrome = (str) => {
  // write your code here

  str = str.toLowerCase();
  let reverseStr = str.split('').reverse().join('');
  reverseStr = reverseStr.toLowerCase()
  
  console.log(reverseStr)

  if (reverseStr === str) return true;
  return false;
};


palidrome('Racecar')