const myService = require('./myModule');
const myService2 = require('./myModule2')

const numbers = [1, 2, 3, 4, 5];
const result = myService.sumArray(numbers);
console.log(result); // Output: 15

const result2 = myService.averageArray(numbers);
console.log(result2); // Output: 3


const result3 = myService2.getCurrentTime();
console.log(result3);

const result4 = 1234;
console.log(myService2.formatNumber(result4))