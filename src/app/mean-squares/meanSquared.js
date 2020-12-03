/**
 * Genera n cantidad de números pseudoaleatorios con el método de cuadrados medios
 *  seed: semilla
 *  qua: cantidad
 */
let sizeSeed;
let numbersGenerated = []
let ris = []

function meanSquares(seed, qua, k) {
  sizeSeed = k;
  numbersGenerated = []
  ris = []
  generateNumbers(seed, qua);
  return ris;
}

function getXis() {
  return numbersGenerated;
}

function generateNumbers(xi, missingNumbers) {
  if (missingNumbers != 0) {
    let xiPlus1 = parseInt(extract(Math.pow(xi, 2)))
    console.log('xi+1: ', xiPlus1)
    numbersGenerated.push(xiPlus1)
    generateNumbers(xiPlus1, missingNumbers - 1)
  } else {
    getRis();
  }
}

function getRis() {
  let divisor = Math.pow(10, sizeSeed)
  numbersGenerated.forEach(xi => {
    ris.push(xi/divisor)
  })
}

function extract(xiSquare) {
  console.log(xiSquare)
  console.log(completeNumber(xiSquare.toString()))
  let extractI = completeNumber(xiSquare.toString()).toString().substr(sizeSeed-sizeSeed/2, sizeSeed)
  console.log(extractI)
  return extractI;
}

function completeNumber(number) {
  if(number.length < sizeSeed*2) {
    const difference = sizeSeed * 2 - number.length
    return '0'.repeat(difference) + number
  }
  return number;
}

export {meanSquares, getXis}
