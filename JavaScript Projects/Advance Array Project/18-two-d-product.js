/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

let twoDimensionalProduct = function(arr) {
    // Your code here
    let newArr = arr.reduce((acc, num) => acc.concat(num), []);

    let mult = newArr.reduce((mult, num) => mult *= num);
    
    return mult;

};
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}