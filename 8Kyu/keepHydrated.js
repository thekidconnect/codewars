function litresOne(time) {
    return Math.floor(time/2);
  }

function litresTwo(time) {
    return ~~(time / 2);
}

const testResults = litresTwo(6.7);
console.log(testResults); // Output: 3