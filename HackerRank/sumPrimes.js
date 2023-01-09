// function sumPrimes(num) {
//   let list = [];
//   let primeList = [];
//   let notPrimeList = [];

//   for (var i = 2; i <= num; i++) {
//     list.push(i);
//     checkPrime(i);
//   }
//   // console.log(list)

//   function checkPrime(number) {
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         notPrimeList.push(number);
//         return false;
//       }
//     }
//     primeList.push(number);
//     return true;
//   }

//   // console.log(notPrimeList)
//   console.log(primeList);

//   const reducer = (previousValue, currentValue) => previousValue + currentValue;

//   return primeList.reduce(reducer);
// }

// sumPrimes(10);


function sumPrimes(num) {
  let list = [];
  let primeList = [];
  let notPrimeList = [];

  list = [...Array(num).keys()];
  console.log(list)

for (let i = 2; i <= list.length; i++) {
  (function (i) {

    for (let k = 2; k < list.length; k++){
      if( i % k == 0){
        return false;
      }
    }
    return true;

    var x = "Hello!!";  // I will invoke myself
  
  })();

}
  
   


  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  return primeList.reduce(reducer);
}


sumPrimes(10);





