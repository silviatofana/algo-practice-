// A function receives a string s and a series of queries. For each query, there will be a beginning and ending index and a number of substitutions. A palindrome is a string spelled the same way forward or backward, like a mom or abba. For each substring represented by the beginning and ending index of the string s, determine if it is possible to rearrange it to a palindrome after performing up to the given number of substitutions.
// Start with an empty result string. After each query, append a 1 or  0  to indicate whether the substring can be converted to a palindrome. A 1 represents yes and a 0 represents no.
// Return the results string after all queries have been processed.

// Complete the function 
// palindromeChecker has the following parameter(s):
// strings: the working string
// int startIndex [q]: an array of integers that denotes the left index of each substring to process
// int endIndex [q]: an array of integers that denotes the right index of each substring to process
// Returns: 
  // string: : a string where each position represents the results of a query, 1 if a palindrome is possible, 0 if not

  /*
 * Complete the 'palindromeChecker' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndex
 *  3. INTEGER_ARRAY endIndex
 *  4. INTEGER_ARRAY subs
 */

function palindromeChecker(s, startIndex, endIndex, subs) {
  // Write your code here
  let result = '';
  for (let i = 0; i < startIndex.length; i++) {
    let sub = s.substring(startIndex[i], endIndex[i] + 1);
    let subArr = sub.split('');
    let subArrRev = subArr.reverse();
    let subRev = subArrRev.join('');
    if (sub === subRev) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;

}


console.log(palindromeChecker('cbac', [0,2,1], [3,3,3,], [0,2,2]));
// Expected output: "011"