/*******************************************************************************
Write a function `andSelect` that accepts an array and two callbacks. The function
should return a new array containing elements of the original array that result in
true when passed into both callbacks.

Examples:

let isEven = function (n) {
    return n % 2 === 0;
};

let isPositive = function (n) {
    return n > 0;
};

console.log(andSelect([-3, 8, 7, 11, 6, 12, -4], isEven, isPositive));
// [ 8, 6, 12 ]

let isUpperCase = function (s) {
    return s === s.toUpperCase();
};

let startsWithA = function (s) {
    return s[0].toUpperCase() === 'A';
}
console.log(andSelect(['ants', 'APPLES', 'ART', 'BACON', 'arm'], isUpperCase,  startsWithA));
// [ 'APPLES', 'ART' ]

*******************************************************************************/

let andSelect = function(arr, cb1, cb2) {

    let newArr = [];

    for(let i = 0; i < arr.length; i++){

        let el = arr[i];

        if(cb1(el) === true && cb2(el) === true){
            newArr.push(el);
        }
    }
    
    return newArr;

};


andSelect([-3, 8, 7, 11, 6, 12, -4], function isEven(x){
    return x % 2 === 0;
}, function isPositive(y){

    return y > 0;
});






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = andSelect;
