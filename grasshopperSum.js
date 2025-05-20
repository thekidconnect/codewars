function summation(num) {
    // Code here
    var sum = 0
    for (let i=0;i<=num;i++) {
      sum = sum+i
    }
    return sum
  }

function summationTwo(num) {
    return num ? num + summationTwo(num-1):0
}

const a = summationTwo(8);
console.log(a);
