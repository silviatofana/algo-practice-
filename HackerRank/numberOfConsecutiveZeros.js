var A = [1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0];
var N = A.length;

function AvailConseblocks(A) {
    var counter = 0;
    var result = [];

    for (let i = 0; i < A.length; i++) {
        if (A[i] === 0) {
            counter++;
        } else {
            // if element is not zero and counter is not zero as well
            // means we found 0 or 0's surrounded by non-zero elements
            // we push the counter and re-intialize it to zero
            if (counter !== 0) {
                result.push(counter);
                counter = 0;
            }
        }
    }

    // this is important if  last element of the array was zero as well
    if (counter !== 0) {
        result.push(counter);
    }

    return result;
}


console.log(AvailConseblocks(A));


let arr = [1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0]

let result =arr.join('').split(/[^0]/g).filter(e => e).map(e => e.length)

console.log(result)