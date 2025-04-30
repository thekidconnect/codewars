function findSmallestInt(arr) {
    //your code here
    return arr.reduce((min,num)=>min<num?min:num);
  }

  testResults = findSmallestInt([78,56,232,412,228])
  console.log(testResults)