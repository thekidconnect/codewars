// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

function sum1 (numbers) {
    return numbers.reduce((a,b)=>a+b,0)
  }

function sum2 (numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
  }

// Test the function with an example input

const testResults = sum2([1, -2, 3.5, 4]);
console.log(testResults); // Output: 6.5