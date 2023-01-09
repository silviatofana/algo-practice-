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
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

// There are two array of integers, arr1 and arr2.
// One move is defined as an increment or decrement of one element in an array.
// Determine the minimum number of moves to match arr1 with arr2.
// No repeatiton of the digits is allowed.

    function minimumMoves(arr1, arr2) {
    // Write your code here
    let moves = 0
    let obj = {}
    let obj2 = {}

    // create an object with the values of arr1 as keys and the number of times they appear as values
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = obj[arr1[i]] + 1 || 1
    }

    // create an object with the values of arr2 as keys and the number of times they appear as values

    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = obj2[arr2[i]] + 1 || 1
    }

    // store the keys of the object in an array
    let keys = Object.keys(obj)
    let values = Object.values(obj)
    let keys2 = Object.keys(obj2)
    let values2 = Object.values(obj2)

    console.log(keys)
    console.log(values)
        // return answer
}

console.log(minimumMoves([1234, 4321], [2345, 3214]))
// =>

