/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr, cb) {

    let theSmallest = arr[0];

    for(let i = 0; i < arr.length; i++){

        let el = arr[i];

        if(el < theSmallest){

            theSmallest = el;

        }
    }
    if(cb){

        return cb(theSmallest);
    }

return theSmallest;

};

minValueCallback([64, 25, 49, 9, 100]);
minValueCallback([64, 25, 49, 9, 100], Math.sqrt);






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
