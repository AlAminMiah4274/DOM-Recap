const getMaxNumber = () => {
    const number1 = [12, 16, 20, 24, 30];
    const number2 = [11, 15, 19, 25];
    const combineNumber = [...number1, ...number2];
    const maximumNumber = Math.max(...combineNumber);
    return maximumNumber;
}
console.log(getMaxNumber());