function shortestWordEditPath(source, target, words) {
    const queue = [[source, 0]];
    const visited = new Set([source]);
  
    while (queue.length > 0) {
      const [word, steps] = queue.shift();
  
      if (word === target) {
        return steps;
      }
  
      for (let i = 0; i < word.length; i++) {
        for (let j = 97; j <= 122; j++) {
          const newWord = word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
  
          if (words.includes(newWord) && !visited.has(newWord)) {
            queue.push([newWord, steps + 1]);
            visited.add(newWord);
          }
        }
      }
    }
  
    return -1;
  }