/*******************************************************************************
Write a function `greaterCallbackValue` that accepts a value and two callbacks
as arguments. The function should pass the value to both callbacks and return the
result of the callback that is greater.

Examples:

let doubler = function (n) {
    return 2 * n;
}

let squarer = function (n) {
    return n * n;
}

console.log(greaterCallbackValue(5, doubler, squarer));     // 25
console.log(greaterCallbackValue(1, doubler, squarer));     // 2
console.log(greaterCallbackValue(9, Math.sqrt, doubler));   // 18
*******************************************************************************/

let greaterCallbackValue = function(val, cb1, cb2) {

    let firstCb = cb1(val);
    let secondCb = cb2(val);


    if(firstCb > secondCb){
        return firstCb;
    }else{
        return secondCb;
    }

};

console.log(greaterCallbackValue(5, function doubler(n) {
    return 2 * n;
}, function squarer(n){
    return n * n;
}));








/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = greaterCallbackValue;
