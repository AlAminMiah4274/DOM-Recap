const add = (first, Second) => first + Second;

const fullName = (first, last) => first + ' ' + last;

const getMultiply = (a, b) => a * b;
const result = getMultiply(2, 3);
// console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

// no parameter arrow function
const getPie = () => 3.14;

// one parameter arrow function
const doubleIt = (num) => num * 2;

// one parameter simple version (***)
const fiveTimes = num => num * 5;

// multiLine arrow function
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result;
}