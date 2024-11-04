// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
// const greet = (name) => {
//   return `Hello, ${name}!`;
// };
const greet = (name) => `Hello, ${name}!`;

console.log(greet("Mohammed"));

// Write a simple arrow function that takes two parameters and returns their sum.
const sum = (num1, num2) => num1 + num2;
console.log(sum(8, 6));

// Write a simple arrow function that squares a number.
const squares = (numbers) => numbers ** 2;
console.log(squares(8));

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const squaresNum = (numbers) => numbers.map((num) => num ** 2);

console.log(squaresNum([2, 4, 6, 8, 10]));
