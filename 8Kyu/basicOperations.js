function basicOpOne(operation, value1, value2){
    //Code
    if (operation==='+') {
      return value1+value2
    }
    if (operation==='-') {
      return value1-value2
    }
    if (operation==='*') {
      return value1*value2
    }
    if (operation==='/') {
      return value1/value2
    }
    
    return 0;
  }

function basicOpTwo(operation, value1, value2){
    //Code
    switch (operation) {
      case '+':
        return value1 + value2;
      case '-':
        return value1 - value2;
      case '*':
        return value1 * value2;
      case '/':
        return value1 / value2;
      default:
        return 0;
    }
  }

  function basicOpThree(operation, value1, value2){
    //Code
    return {
      '+': value1 + value2,
      '-': value1 - value2,
      '*': value1 * value2,
      '/': value1 / value2
    }[operation] || 0;
  }

  function basicOpFour(operation, value1, value2){
    return eval(value1 + operation + value2); 
    }

const testResults=basicOpFour('+', 4, 7);
console.log(testResults); // Output: 11