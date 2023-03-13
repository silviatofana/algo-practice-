function findMedianSortedArrays(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
  
    // make sure nums1 is the smaller array
    if (m > n) {
      return findMedianSortedArrays(nums2, nums1);
    }
  
    // binary search for the correct partition of nums1
    let low = 0;
    let high = m;
    while (low <= high) {
      const i = Math.floor((low + high) / 2);
      const j = Math.floor((m + n + 1) / 2) - i;
  
      const maxLeftNums1 = (i === 0) ? -Infinity : nums1[i-1];
      const minRightNums1 = (i === m) ? Infinity : nums1[i];
      const maxLeftNums2 = (j === 0) ? -Infinity : nums2[j-1];
      const minRightNums2 = (j === n) ? Infinity : nums2[j];
  
      if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
        // found the correct partition
        if ((m + n) % 2 === 0) {
          return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2;
        } else {
          return Math.max(maxLeftNums1, maxLeftNums2);
        }
      } else if (maxLeftNums1 > minRightNums2) {
        // adjust the partition of nums1 to the left
        high = i - 1;
      } else {
        // adjust the partition of nums1 to the right
        low = i + 1;
      }
    }
  
    // should not reach here
    return 0;
  }
  console.log(findMedianSortedArrays([1,3], [2])); // 2.00000
  console.log(findMedianSortedArrays([1,2], [3,4])); // 2.50000
  console.log(findMedianSortedArrays([0,0], [0,0])); // 0.00000
  console.log(findMedianSortedArrays([], [1])); // 1.00000
  console.log(findMedianSortedArrays([2], [])); // 2.00000
    