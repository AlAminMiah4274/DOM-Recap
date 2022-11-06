const max = Math.max(45, 15, 78, 44, 99);
// console.log(max);

const min = Math.min(25, 30, 78, 54);
// console.log(min);

const numbers = [15, 45, 78, 54, 98];
const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);
// console.log(numbers);
// console.log(...numbers);
// console.log(largest);
console.log(smallest);

// creating new array:
const numbers2 = [...numbers];
// numbers.push(55);
// numbers2.push(7777);

// adding number to the new array:
const numbers3 = [10, 20, ...numbers];
const numbers4 = [...numbers, 30, 40];

// console.log(numbers);
// console.log(numbers2);
// console.log(numbers3);
// console.log(numbers4);