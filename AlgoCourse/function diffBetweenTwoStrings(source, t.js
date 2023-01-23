function diffBetweenTwoStrings(source, target) {
	/**
	@param source: string
	@param target: string
	@return: string[]
  source = "ABCDEFG", and 
  target = "ABDFFGH" we might 
  return: ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"
	*/
// your code goes here
  console.log(source);
  console.log(target);
  let output = [],
      result = getCompareMap(source,target);
  buildTheResult(result,source,target);
  console.log(result);
  constructOutput(source,target,result,output)
  return output;
}

// you can try iterating through the loop

function buildTheResult(result,source,target){
  for(let row = 0; row<target.length; row++){
    for (let col = 0; col<source.length; col++){
      if(source[col] === target[row]){
        result[row+1][col+1]= result[row][col];
      }else {
        result[row+1][col+1] = Math.min(result[row+1][col], result[row][col+1])+1;
      }
    }
  }
}

function constructOutput(source,target,result,output){
  let rows = target.length,
      cols = source.length;
  
  while(cols>0&&rows>0){
    //console.log('source: ${source[cols-1]} target:${target[rows-1]} result col+1:${result[rows][cols]} row+1:${result[rows][cols]}');
    if((source[cols-1] === target[rows-1])&&((result[rows-1][cols-1] <= result[rows-1][cols])&&(result[rows-1][cols-1] <=result[rows][cols-1]))){
      //&&(result[rows-1][cols-1] <= result[rows-1][cols])){
      output.unshift(source[cols-1]);
      // console.log("diagonal up with" + source[cols-1]);
      rows--;
      cols--;
    }else if(result[rows-1][cols] <= result[rows][cols-1]) {
      output.unshift("+"+target[rows-1]);
      //console.log("moving up with"+target[rows-1]);
      rows--;
    }else if(result[rows][cols-1] <= result[rows-1][cols]){
      output.unshift("-"+source[cols-1]);
      //console.log(moving left with"+source[cols-1]);
      cols--;
    }
    }
  while(rows>0){
    if(result[rows-1][cols] <= result[rows][cols]){
      output.unshift("-"+source[cols-1]);
    }else {
      output.unshift(source[cols-1]);
    }
    cols--;
  }
  }

function getCompareMap(source,target){
  let i,compareMap = [...Array(target.lentgh+1)].map(x=>Array(source.length+).fill(0));
  for(let i=0; i<=terget.length; i++){
    compareMap[i][0] = i;
  }
  for(i=0; i<=source.length; i++){
    compareMap[0][i] = i;
  }
  return compareMap;
}
/*  var shortestWay = function(source, target) {
    const map = new Map();
    for (let i = 0; i < source.length; i++) {
        if (map.get(source[i])) {
            const arr = map.get(source[i]);
            arr.push(i);
            map.set(source[i], arr);            
        } else {
            map.set(source[i], [i]);
        }
    }
    let occurrences = 0;
    for (let i = 0; i < target.length; i++) {
        const indexes = map.get(target[i]);
        if (indexes === void 0) return -1;
        occurrences++;
        let max = 0;
        indexes.forEach(index => {
            let j = 0;
            let ignore = 0;
            while(source[index + j + ignore] !== void 0) {
                if(target[i + j] !== source[index + j + ignore]) {
                    ignore++;
                } else {
                    max = Math.max(max, j++);
                }
            }
        });
        i += max;
    }
    return occurrences;
};

  
  function diffBetweenTwoStrings(source, target):
    # memo[i][j] will be our cached answer to dp(i, j)
    memo = new Array(source.length, target.length)

    # dp(i, j) is the minimum edits to transform
    # string source[i:] into string target[j:].
    function dp(i, j):
        # If one of the strings is empty, we know
        # the answer already.
        if i == source.length OR j == target.length:
            return target.length - j
function diffBetweenTwoStrings(source, target):
    # memo[i][j] will be our cached answer to dp(i, j)
    memo = new Array(source.length, target.length)

    # dp(i, j) is the minimum edits to transform
    # string source[i:] into string target[j:].
    function dp(i, j):
        # If one of the strings is empty, we know
        # the answer already.
        if i == source.length OR j == target.length:
            return target.length - j

        # Otherwise, if we don't have a cached answer,
        # then find one.
        else if memo[i][j] == null:
            if source[i] == target[j]:
                memo[i][j] = dp(i+1, j+1)
            else:
                memo[i][j] = 1 + min(dp(i+1, j), dp(i, j+1))

        return memo[i][j]
         function diffBetweenTwoStrings(source, target):
    ans = []
    i = 0
    j = 0
    # We are always considering strings source[i:] and target[j:]
    while i < source.length AND j < target.length:
        if source[i] == target[j]:
            # Write the string with no edits
            ans.push(source[i])
            i += 1
            j += 1
        else:
            # We have to decide whether to subtract source[i],
            # or add target[j].
            if dp(i+1, j) <= dp(i, j+1):
                ans.push('-' + source[i])
                i += 1
            else:
                ans.push('+' + target[j])
                j += 1
   while j < target.length:
        ans.push('+' + target[j])
        j += 1

    return " ".join(ans)
        */