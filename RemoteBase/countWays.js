'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'countWays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY nums as parameter.
 */

function countWays(nums) {
    // Write your code here
    // Split the array into two halves
    // count the number of ways to split nums into three sub array
    // The array num contains n non negative integers. Determine the number of ways to split num into three non empty subarrays A1, A2, and A3 with the sum of elements of the subarrays as S1, s2, and s3 respectively such that S1, S2, AND S3 satisfy S2 <= S1 + S3. Return the value modulo 1000000007.

    // Example 1:
    // Input: nums = [1, 2, 3, 4]
    // Output: 6

    // Explanation: The possible ways are listed below:
    // [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]
    // [1, 2, 3], [1, 3, 2], [2, 2, 3], [2, 3, 2], [3, 2, 2]
    // [1, 2, 4], [1, 4, 2], [2, 4, 1], [4, 1, 2], [4, 2, 1]
    // [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]
    // [1, 4, 2], [2, 4, 1], [4, 1, 2], [4, 2, 1]
    // [1, 4, 3], [1, 3, 4], [1, 2, 3], [1, 2, 4], [1, 3, 2], [2, 3, 1], [2, 4, 1], [3, 1, 4], [3, 4, 1], [4, 1, 3], [4, 3, 1]
    // [1, 3, 4], [1, 4, 3], [3, 1, 4], [3, 4, 1], [4, 1, 3], [4, 3, 1]
    // [2, 3, 4], [2, 4, 3], [3, 2, 4], [3, 4, 2], [4, 2, 3], [4, 3, 2]

    // Example 2:
    // Input: nums = [1, 1, 1, 1, 1]
    // Output: 12

    // Example 3:
    // Input: nums = [2, 2, 2, 2, 2]
    // Output: 48

    // Constraints:
    // 3 <= nums.length <= 10^5

    // Approach 1: Brute Force
    // Time Complexity: O(n^3)
    // Space Complexity: O(1)

    // Approach 2: Dynamic Programming
    // Time Complexity: O(n^2)
    // Space Complexity: O(n)

    // Approach 3: Dynamic Programming
    // Time Complexity: O(n)

    // Approach 1
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         for (let k = j + 1; k < nums.length; k++) {
    //             if (nums[i] + nums[j] + nums[k] === 0) {
    //                 count++;
    //             }
    //         }
    //     }
    // }
    // return count % 1000000007;

    // Approach 2
    // let count = 0;
    // let dp = Array(nums.length).fill(0);
    // dp[0] = 1;
    // for (let i = 1; i < nums.length; i++) {
    //     for (let j = 0; j < i; j++) {
    //         dp[i] += dp[j];
    //     }
    // }
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === 0) {
    //             count += dp[j];
    //         }
    //     }
    // }
    // return count % 1000000007;

    // Approach 3
    // let count = 0;
    // let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    //     if (sum === 0) {
    //         count++;
    //     }
    // }
    // return count % 1000000007;

    // Approach 4
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum === 0) {
            count++;
        }
        if (sum < 0) {
            sum = 0;
        }
    }
    return count % 1000000007;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numsCount = parseInt(readLine().trim(), 10);

    let nums = [];

    for (let i = 0; i < numsCount; i++) {
        const numsItem = parseInt(readLine().trim(), 10);
        nums.push(numsItem);
    }

    const result = countWays(nums);

    ws.write(result + '\n');

    ws.end();
}

console.log(countWays([1, 2, 3, 4]));