// problem: 1
const multiplication = (a, b, c) => {
    const multiply = a * b * c;
    return multiply;
}
const result = multiplication(2, 4, 5);
console.log(result);

// problem: 2
const multiLine = `I am a web developer
I love to code
I love to eat biriyani`;
console.log(multiLine);

// problem: 3
const defaultValue = (num1, num2 = 0) => num1 + num2;
console.log(defaultValue(15));