/*******************************************************************************
Write a function `atMost` that accepts an array, a max number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
at most (fewer than or equal to) `max` elements of the array that result in true
when passed into the callback.

Examples:

let isPositive = function (n) {
    return n > 0;
};
let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
};

console.log(atMost([6, -2, 4, -1], 3, isPositive));                             // true
console.log(atMost([6, -2, 4, 1], 3, isPositive));                              // true
console.log(atMost([6, 2, 4, 1], 3, isPositive));                               // false
console.log(atMost(['boat', 'cat', 'car'], 1, startsWithA));                    // true
console.log(atMost(['boat', 'cat', 'car', 'academy'], 1, startsWithA));         // true
console.log(atMost(['boat', 'arc', 'cat', 'car', 'academy'], 1, startsWithA));  // false

*******************************************************************************/

let atMost = function(arr, max, cb) {

    let count = 0;

    for(let i = 0; i < arr.length; i++){

        if(cb(arr[i]) === true){
            count++;
        }
    }

    if(count <= max){
        return true;
    }

    return false;

};


atMost([6, -2, 4, -1], 3, function isPositive(n) {
    return n > 0;
});
atMost(['boat', 'cat', 'car'], 1, function startsWithA(s) {
    return s[0].toUpperCase() === 'A';
});



/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = atMost;
