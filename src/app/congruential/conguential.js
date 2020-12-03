let numbersGenerated = []
let ris = []
let a;
let c;
let m;
let closedInterval;

function congruentialMethod(seed, k, cValue, g, isClosedInterval, isMultiplicative) {
  ris = []
  numbersGenerated = []
  if(!isMultiplicative){
    a = 1 + 2*k;
    c = cValue;
  } else {
    a = 8*k + 3
    c = 0
  }
  m = Math.pow(2, g)
  closedInterval = isClosedInterval
  generateNumbers(seed, 100);
  return ris;
}

function getXis() {
  return numbersGenerated;
}

function generateNumbers(xi, missingNumbers) {
  if (missingNumbers != 0) {
    let xiPlus1 = (a*xi + c)%m
    numbersGenerated.push(xiPlus1)
    if (closedInterval) {
      ris.push(xiPlus1/(m-1))
    }else {
      ris.push(xiPlus1/(m))
    }
    generateNumbers(xiPlus1, missingNumbers - 1)
  }
}

export {congruentialMethod, getXis}
