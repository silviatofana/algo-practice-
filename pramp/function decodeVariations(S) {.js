function decodeVariations(S) {
    let n = S.length;
    let dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = S[0] === '0' ? 0 : 1;
    for (let i = 2; i <= n; i++) {
      let oneDigit = parseInt(S.substring(i - 1, i));
      let twoDigits = parseInt(S.substring(i - 2, i));
      if (oneDigit >= 1 && oneDigit <= 9) {
        dp[i] += dp[i - 1];
      }
      if (twoDigits >= 10 && twoDigits <= 26) {
        dp[i] += dp[i - 2];
      }
    }
    return dp[n];
  }