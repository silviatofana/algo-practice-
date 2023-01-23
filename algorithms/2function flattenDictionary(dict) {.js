function flattenDictionary(dict) {
    // your code goes here
      //loop
    //obj having obj
    //then call recurs the new object
    //key : value
    return checkDeep(dict);
  }
  
  function checkDeep(dic){
    let keyVal = {};
    
    for (let key in dic){
      //if (key==)
      //console.log(key, typeof(dic[key]));
      //continue;
      if (typeof(dic[key]) == "object"){
        let getKeyValue =  checkDeep(dic[key]);
        for (let key1 in getKeyValue){
          let tempKey = "";
          if (key !== ""){
            tempKey = key;
          }
          if (key1 !== ""){
            if (tempKey !== ""){
              tempKey += ".";
            }
            tempKey += key1;
          }
          keyVal[tempKey] = getKeyValue[key1];
          
        }
      }else{
            keyVal[key] = dic[key];
      }
    }
      return keyVal;
    
  }
  
  //console.log(flattenDictionary({"key2":{"a":"2"}, "dfd":"9"}))
  
  //O(n)