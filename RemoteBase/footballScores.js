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
 * Complete the 'counts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY teamA
 *  2. INTEGER_ARRAY teamB
 */

function counts(teamA, teamB) {
    // Write your code here
    let obj = {}
    teamA.sort()

    for (let i = 0; i < teamB.length; i++) {
        // console.log("Team B " + teamB[i])

        for (let j = 0; j < teamA.length; j++) {
            if (teamB[i] >= teamA[j]) {
                obj[teamB[i]] = obj[teamB[i]] + 1 || 1
            }
        }
    }

    // store the keys of the object in an array
    let keys = Object.keys(obj)
    let values = Object.values(obj)

    console.log(values)

    //
    // for (let i = 0; i < teamB.length; i++) {
    //     for (let j = 0; j < teamB.length; j++) {
    //         if (teamB[i] >= teamA[j]) {
    //             obj[teamA[i]] = obj[teamB[i]] + 1 || 1
    //         }
    //     }
    // }
    //
    // let values = Object.values(obj)
}

counts([1,2,3], [2,4])
// => [2, 3]

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const teamACount = parseInt(readLine().trim(), 10);

    let teamA = [];

    for (let i = 0; i < teamACount; i++) {
        const teamAItem = parseInt(readLine().trim(), 10);
        teamA.push(teamAItem);
    }

    const teamBCount = parseInt(readLine().trim(), 10);

    let teamB = [];

    for (let i = 0; i < teamBCount; i++) {
        const teamBItem = parseInt(readLine().trim(), 10);
        teamB.push(teamBItem);
    }

    const result = counts(teamA, teamB);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
