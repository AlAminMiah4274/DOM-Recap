const person1 = 'Donald Trump';
const person2 = "Barak Obama";
const person3 = `Joe Biden`;

const multiLine = 'First line of code /n' +
    'Second line of code' +
    'Third line of code' +
    'Fourth line of code';

// console.log(multiLine);

const newMultiLine = `First line of code
Second line of code 
Third line of code
Fourth line of code`;

// console.log(newMultiLine);

const a = 20;
const b = 30;
const summary = 'Sum of ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);

const newSummary = `Sum of ${a} and ${b} is: ${a + b}`;
console.log(newSummary);