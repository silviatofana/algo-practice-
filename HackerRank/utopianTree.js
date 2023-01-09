function utopianTree(n) {
  // Write your code here
  let list = []
  
  for (let i = 0; i < n; i++) {
      list.push(i)
  }

  let heigth = 1;

  for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 == 0) {
      heigth = heigth + heigth;
    }

    if (list[i] % 2 == 1) {
      heigth = heigth + 1;
    }
   
  } 
  
  console.log(heigth)
}


utopianTree(4)

