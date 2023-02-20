function indexEqualsValueSearch(arr) {
    let low = 0;
    let high = arr.length - 1;
    let answer = -1;
    
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      
      if (arr[mid] === mid) {
        answer = mid;
        high = mid - 1;
      } else if (arr[mid] < mid) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    
    return answer;
  }