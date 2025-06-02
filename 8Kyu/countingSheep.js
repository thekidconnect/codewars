function countSheepsOne(sheep) {
    // TODO
    var num_sheep = 0
    for (let i = 0; i<sheep.length; i++) {
      if (sheep[i]) {
        num_sheep++
      }
    }
    return num_sheep
  }

var countSheepsTwo=(sheep)=>sheep.filter(Boolean).length

const testResults=countSheepsOne([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true])
console.log(testResults)