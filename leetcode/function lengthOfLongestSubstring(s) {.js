function lengthOfLongestSubstring(s) {
    let maxLength = 0; // Initialize the maximum length to 0
    let left = 0; // Left pointer of the window
    const charMap = new Map(); // Map to store characters and their indices
  
    for (let right = 0; right < s.length; right++) {
      const currentChar = s[right];
  
      // If the current character is already in the map and its index is greater than or equal to the left pointer,
      // move the left pointer to the next index of the duplicate character.
      if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
        left = charMap.get(currentChar) + 1;
      }
  
      // Add the current character and its index to the map
      charMap.set(currentChar, right);
  
      // Update the maximum length if the current substring's length is greater
      maxLength = Math.max(maxLength, right - left + 1);
    }
  
    return maxLength;
  }