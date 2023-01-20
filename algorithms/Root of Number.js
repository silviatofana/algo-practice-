/*input:  x = 7, n = 3
output: 1.913

input:  x = 9, n = 2
output: 3
*/

function root(x, n) {
    // your code goes here
    if(x==1){
      return;
    }else if(x==0 && n>0){
      return 0;
    }else if(x==0 && n<0){
      return Infinity;
    }else if(n==1){
      return x;
    }else if(n==0 && x>1){
      return Infinity;
    }else if(n==0 && x==1){
      return 1;
    }else if(n==0 && x<1 && x>-1){
      return 0;
    }else if(n==0){
      return NaN;
    }
    var result = false;
    var num = x;
    var neg = false;
    if(num<0){
      //not using Math.abs because i need the function to remember if the number was positive or negative
      num =num*-1;
      neg = true;
    }
    if(n==2){
      //better to use square root if we can 
      result = Math.cbrt(num);
    }else if(n==3){
      //better to use cube root if we can 
      result = Math.cbrt(num);
    }else if(n>3){
      //the method Digital Plane suggested
      result = Math.pow(num,1/n);
    }else if(n<0){
      //the method of Digital Plane suggested
      result = Math.pow(num,1/n);
    }
    if(neg&& n==2){
      //if square root, you can just add the imaginary number "i=result*-1" to a string answer
      //you should check if the functions return value that contains i, before continuing any calulation
      result +='i';
    }else if(neg && n%2!==0 && n>0){
      //if the root is an even number that is not 2, things get more complex
      // if somone wants to calculate this further, they can
      //I'm just going to stop at an i imaginary number of the nth root of -1
      result +='*'+n+'-1'
    }
    return result;
  }