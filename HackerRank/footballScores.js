
function footballScores(teamA, teamB) {
    // Write your code here
    let obj = {}

    for (let i = 0; i < teamB.length; i++) {
        for (let j = 0; j < teamA.length; j++) {
            if (teamB[i] >= teamA[i]) {
                obj[teamB[i]] = teamA[i] + 1 || 1
            }
        }
    }

    return obj

}


// using binary search
function footballScores2(teamA, teamB) {
    // Write your code here
    let obj = {}

    // binary search to find all elements lower than teamB[i]
    for (let i = 0; i < teamB.length; i++) {
        let left = 0
        let right = teamA.length - 1
        let mid = Math.floor((left + right) / 2)

        while (left <= right) {
            if (teamA[mid] <= teamB[i]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
            mid = Math.floor((left + right) / 2)
        }

        obj[teamB[i]] = left
    }

    return obj
}

console.log(footballScores2([1,2,3], [2,4]))
console.log(footballScores([1,2,3], [2,4]))