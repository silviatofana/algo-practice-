/*
input:  text = "aa", pattern = "a"
output: false

input:  text = "aa", pattern = "aa"
output: true

input:  text = "abc", pattern = "a.c"
output: true

input:  text = "abbb", pattern = "ab*"
output: true

input:  text = "acd", pattern = "ab*c."
output: true
*/

function isMatch(text, pattern) {
    // your code goes here
    
    if(pattern.length === 0){
      return text.length ===0;
    }
    
    const firstMatch = (text.length > 0) && (text[0] === pattern[0] || pattern[0] === '');
    if(pattern.length >=2 && pattern[1] === '*'){
      return isMatch(text, pattern.slice(2)) || (firstMatch && isMatch(text.slice(1), pattern));
    }else {
      return firstMatch&&isMatch(text.slice(1),pattern.slice(1));
    } 
      return true
      
    } 