const evens = [0, 2, 4];
const odds = [1, 3, 5];
const numbers = [-2, -1, ...evens, ...odds, 6, 7, 8];
// const sorted = numbers.sort();
const sorted = [...numbers].sort();

console.log("numbers", numbers, sorted);
