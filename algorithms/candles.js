function birthdayCakeCandles(candles) {
  // Write your code here
  const t0 = performance.now();

  let maxValue = candles[0];
  let maxValueCount = 0;


  candles.map((candle) => {
    if (candle > maxValue) {
      maxValue = candle;
      maxValueCount = 1;
    } else if (candle === maxValue) {
      maxValueCount++;
    }
  });

  const t1 = performance.now();
  console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

  return maxValueCount;


}

// 1 Million random numbers in an array
// new Array(1000000).fill(0).map((_, i) => i);

console.log(birthdayCakeCandles(new Array(10000000).fill(0).map(() => Math.floor(Math.random() * 10000000))));