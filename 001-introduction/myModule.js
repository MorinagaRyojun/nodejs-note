// ทดสอบสร้าง Module

function sumArray(numbers) {

  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
    }
  }
  
    return sum;
}

function averageArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
    }
  }

  const average = sum / numbers.length;
  return average;
}

  
module.exports.sumArray = sumArray
module.exports.averageArray = averageArray