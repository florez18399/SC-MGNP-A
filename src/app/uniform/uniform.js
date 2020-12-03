let ris = []
let ranges = []
let counts = []
let intervals = []

function uniformDist(quant, intervalsQuant) {
  ris = Array.from({length: quant}, () => Math.random())
  intervals = intervalsQuant;
  countInIntervals();
  return ris;
}

function countInIntervals() {
  let risOrdered = ris.sort((a, b) => {
    return a - b;
  })
  let min = risOrdered[0]
  let max = risOrdered[risOrdered.length - 1]
  let count = []
  let c = parseFloat(max)-parseFloat(min)
  let ranges = getRanges(min, max, (parseFloat(max)-parseFloat(min))/parseFloat(intervals))
  //console.log(parseFloat(max), parseFloat(min))
  let iRanges = 0;
  for(let i=0; i < risOrdered.length; i++){
    if(risOrdered[i] <= ranges[iRanges].max) {
      if(!count[iRanges]){
        count[iRanges] = 1
      }else {
        count[iRanges] = count[iRanges] + 1
      }
    } else {
      iRanges = iRanges + 1
      if(!count[iRanges]){
        count[iRanges] = 1
      }else {
        count[iRanges] = count[iRanges] + 1
      }
    }
  }
  return {ranges: ranges, counts: count}
}

function getRanges(min, max, size) {
  let ranges = []
  let actual = min
  console.log(size)
  while (actual <= max) {
    ranges.push({min: actual, max: actual + size})
    actual = actual+size;
  }
  return ranges;
}

export { countInIntervals, uniformDist}
