function designerPdfViewer(h, word) {
  // Write your code here
  const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  let wordToArray = word.split('')
  
  let positions = []
  
  for (let i = 0; i < wordToArray.length; i++) {
      positions.push(alphabets.indexOf(wordToArray[i]))
  }
  
  let chosen = [];
  
  for (let j = 0; j < positions.length; j++) {
      chosen.push(h[positions[j]])
  }
  
  let maxHeight = Math.max(...chosen)
      
  return maxHeight * word.length;
  
}

designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc')