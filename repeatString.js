repeatStr = (n, s) => s.repeat(n);

function repeatStrTwo(n, s) {
  return new Array(n)
    .fill()
    .map((e) => s)
    .join("");
}

const testResults = repeatStr(6, "I");
console.log(testResults)
