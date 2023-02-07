function decodeVariations(S) {
    return helper(0);
      
    function helper(i) {
      if (i >= S.length) {
        return 1;
      } else if (S[i] === '0') {
        return 0;
      }
        
      let num = 0;
      if (i+1 <= S.length-1) {
        const combinedNum = parseInt(S[i]+S[i+1], 10);
        if (combinedNum <= 26) {
          num += helper(i+2);
        }
      }
      num += helper(i+1);
      
      return num;
    }
  }
  
  //console.log(decodeVariations('1270'));
  // 'AZB' -> '1262'