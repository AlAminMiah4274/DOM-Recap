const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01314993347',
    price: 5000
};

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.price;

const { phone, price, color, name } = fish;

// console.log(name);
// console.log(price);
// console.log(color);
// console.log(phone);

const { age, profession } = { name: 'Almas', age: 56, profession: 'makeup artist' };
// console.log(age);

// array destructuring:
const [first, second] = [45, 80, 90, 97, 54, 85];
// console.log(first, second);

// mojar jinis:
const hero = ['Cris Hamswarth', 'Cris Evans', 'Tom Cruise'];
const [thor, captain, mission] = hero;
// console.log(thor, mission);

// another destructuring:
function getNames() {
    return ['Alim', 'Halim'];
}

const [baba, chacha] = getNames();
// console.log(chacha, baba);

// destructurig & spread operator:(*****)
const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4, c: 5, d: 6 };
console.log(x);
console.log(y);
console.log(z);
