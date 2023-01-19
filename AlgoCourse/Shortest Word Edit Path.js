function shortestWordEditPath(source, target, words) {
	/**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/

    if(!words.includes(target)){
      return -1;
    }
  
    let queue = []; 
    
    function findNeighbors(s){
      let newNeighbors = [];

      words.forEach((word) => {
         if(word.length === s.length){
           diffCount = 0;
           for(let i=0; i<word.length; i++){         
             if(word[i] !== s[i]){
               diffCount++;
               if(diffCount > 1){
                 break; 
               }
             }
           }
           if (diffCount === 1){
             newNeighbors.push(word);
           }
         } 
      });  
      
      return newNeighbors; 
    } 
       
    let depth = 0; 
    let visited = {};
  
    queue.push([source, 0]);
     
    while(queue.length > 0){
      next = queue.shift();
      if(next[0] === target) {
        console.log('found target at depth : ', next[1]);
        return next[1]; 
      }
      newNeighbors = findNeighbors(next[0]);
      newNeighbors.forEach((nn) => {
         queue.push([nn, next[1] + 1]);
         visited[nn] = true;
      });
    } 

    return -1;
}


const source = "bit";
const target = "dog";
const words = ["but","put","big","pot","pog","dog","lot"];
shortestWordEditPath(source, target, words);