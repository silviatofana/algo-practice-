function findDuplicates(arr1, arr2) {
    const set1 = new Set(arr1);
    const result = [];
  
    for (let i = 0; i < arr2.length; i++) {
      if (set1.has(arr2[i])) {
        result.push(arr2[i]);
      }
    }
  
    return result;
  }