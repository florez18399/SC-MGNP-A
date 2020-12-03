import {range} from "rxjs";

var jstat = jStat();
let ris = []
let nis = []
let intervals;

function standardNormalDistInv(quant, intervalsQuant, median, deviation) {
  ris = Array.from({length: quant}, () => Math.random())
  intervals = intervalsQuant;
  generateNi(median, deviation)
  //console.log(ris)
  //countInIntervals()
  return nis;
}

function generateNi(median, deviation) {
  let medianValue = (median) ? median:0;
  let deviationValue = (deviation) ? deviation:1;
  nis = []
  ris.forEach(number => {
    nis.push(jstat.normal(medianValue, deviationValue).inv(number))
  })
}

function countInIntervals() {
  let risOrdered = nis.sort((a, b) => {
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

function getRis() {
  return ris;
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

export {standardNormalDistInv, getRis, countInIntervals}
