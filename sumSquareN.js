function squareSum(numbers){
    return numbers.map(n=>n**2).reduce((a,b)=>a+b,0)
  }

  function squareSumTwo(numbers){
    return numbers.reduce((sum,num)=>sum+num**2,0)
  }

  const testResults = squareSumTwo([11,8,-12,11,7,-19,16,-1,-12])
  console.log(testResults)