function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            console.log(ar[i], ar[j])
            if ((ar[i] + ar[j]) % k === 0) {
                count++
            }

        }
    }
    return count;
}


divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])