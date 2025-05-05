function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let newArr = [];
    for (let i=1; i <= arr.length-1; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
    
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let newArr = [];
    for (let i = arr.length-1; i >= 0; i--){
        if(i % 2 === 1){

            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let indices = []; 
    for (let i = 1; i < arr.length; i *= 2) {
        indices.push(arr[i]);
    }

    return indices;

}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let indices = []; 
    for (let i = 1; i < arr.length; i *= n) {
        indices.push(arr[i]);
    }

    return indices;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let indices = arr.slice(0, (arr.length+1)/2);
    return indices;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let indices = arr.slice((arr.length+1)/2, arr.length+1);
    return indices;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}