// Given an array of numbers, return a new array where each number is doubled.
// Example: [1, 2, 3] => [2, 4, 6]
// Note: The input array will always contain at least one number.

function maps(x){
    return x.map(n=>2*n)
  }

const testResults = maps([1, 2, 3]);
console.log(testResults); // Output: [2, 4, 6]