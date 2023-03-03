function smallestMissingPositive(nums) {
    // Step 1: Remove non-positive elements
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= 0) {
        nums[i] = Infinity;
      }
    }
  
    // Step 2: Mark positive elements as negative
    for (let i = 0; i < nums.length; i++) {
      let idx = Math.abs(nums[i]) - 1;
      if (idx < nums.length && nums[idx] > 0) {
        nums[idx] = -nums[idx];
      }
    }
  
    // Step 3: Find the first non-negative element
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        return i + 1;
      }
    }
  
    // If all elements are negative, return the length of the array plus one
    return nums.length + 1;
  }