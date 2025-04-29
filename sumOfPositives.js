const positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);

function positiveSumTwo(arr) {
  const filteredArray = arr.filter((p) => p > 0);
  if (filteredArray.length === 0) return 0;
  return filteredArray.reduce((a, b) => a + b);
}

const testResults=positiveSum([1, -4, 7, 12])
console.log(testResults)