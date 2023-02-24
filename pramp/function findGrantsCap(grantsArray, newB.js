 {
    grantsArray.sort((a, b) => a - b); // sort the grantsArray in ascending order
    let n = grantsArray.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
        if (grantsArray[i] * (n - i) <= newBudget - total) {
            total += grantsArray[i];
        } else {
            return (newBudget - total) / (n - i);
        }
    }
    return grantsArray[n - 1];
}