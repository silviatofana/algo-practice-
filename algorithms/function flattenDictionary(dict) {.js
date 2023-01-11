function flattenDictionary(dict) {
    // your code goes here
    let res = {}
    helper(dict, "", res);
    return res;
  }
  
  /*  
  {"Key1":"1","${suffix} .@{k}":"1"}
  */
  function helper(obj, suffix, ans) {
    for (let k in obj) {
      let key;
      if (suffix !== '' && k !== '') {
        // ${suffix} .@{k}
        key = suffix + '.' + k;
      } else if (suffix !== '' && k === '') {
        key = suffix;
      } else {
        key = k;
      }
      
      if (typeof obj[k] === 'object') {
        helper (obj[k], key, ans);
      } else {
        ans[key] = obj[k];
      }
    }
  }