function greetOne(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
  }

const greetTwo = name => "Hello, name how are you doing today?".replace("name", name)

const testResults=greetTwo('chibu')
console.log(testResults)