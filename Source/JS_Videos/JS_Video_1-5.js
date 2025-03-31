// Consle and Window   <video 1>
console.log ('hello world')
window.alert('hello world')

// Declaring variables   <video 1>
let a = 10;
let b = 5;

// Arithmetic operations   <video 2>
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

// Displaying results of arithmetic operations  <video 2>
console.log('Sum: ' + sum);         // Outputs: Sum: 15
console.log('Difference: ' + difference); // Outputs: Difference: 5
console.log('Product: ' + product);    // Outputs: Product: 50
console.log('Quotient: ' + quotient);   // Outputs: Quotient: 2
console.log('Remainder: ' + remainder); // Outputs: Remainder: 0


// Taking user input (will work in browser environments)  (prompt == string)   <video 3>
let userInput = prompt('Enter a number: ');


// Type conversion from string to number                                   <video 5>
let userNumber = Number(userInput);                           (number == int)


                                                                        //<general>
// Arithmetic operation with user input
let newSum = userNumber + a;
// Displaying result
console.log('Your number plus ' + a + ' is: ' + newSum);