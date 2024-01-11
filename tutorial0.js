/*
11/01/2024
QDAA Tutorial 0 - Intro to JavaScript - https://www.javascripttutorial.net/javascript-syntax/

JavaScript is a programming language initially designed to interact with elements of web pages. 
Within web browsers, JavaScript consists of three main parts:

1. ECMAScript provides the core functionality.
2. The Document Object Model (DOM) provides interfaces for interacting with elements on web pages
3. The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

The JavaScript engine is a component of web browsers responsible for interpreting and executing JavaScript code. 
It includes a parser to analyze the code, a compiler to convert it into machine code, and an interpreter to run the compiled code.

WHAT WE WILL COVER:
1. Data Types
2. Variables
3. Conditional Statements 
4. for Loops
5. while loops
6. Arrays
7. Functions

Prerequisites:
1. VSCode
2. CodeRunner extension installed
3. nodeJS installed
*/

//----------------------------------------------------------------------------------------------------------------------------

/* PART 1 - Data types

JavaScript has 8 primitive data types:

*/

// null
let a = null;

// undefined
let b;

// boolean
let c = true; // or false

// number
let d = 45; // or even 45.6

// string
let e = "Hello World";

//basic console log to show how a variable works


// symbol – not important for now
// bigint – not important for now
// and a complex data type object - not important for now but will be soon

//----------------------------------------------------------------------------------------------------------------------------

/* PART 2 - Variables

To declare a variable, you use the 'var' or 'let' keyword followed by the variable name as follows:

var message;
let message2;

A variable name can be any valid identifier. By default, the message variable has a special value undefined if you have not assigned a value to it.

Variable names follow these rules:

Variable names are case-sensitive. This means that 'message' and 'Message' are different variables.
Variable names can only contain letters, numbers, underscores, or dollar signs and cannot contain spaces. Also, variable names must begin with a letter, an underscore (_) or a dollar sign ($).
Variable names cannot use the reserved words.

By convention, variable names use camelcase like message, yourAge, and myName.

In Part 1, you can see variables a, b, c, d, and e get defined as different primitive data types.
*/

//----------------------------------------------------------------------------------------------------------------------------

/* PART 3 - Conditional Statements
A program will execute the instructions you give it top->down, left->right

You can use an if-statement to allow instructions to be executed only if some condition is true.
You are responsible for defining what this condition is.
*/

// EXAMPLE 3.1 - if
let userInput = 5;
if (userInput == 5) {
    console.log("User Input is equal to 5.");
}
if (userInput != 5) { // The expression (a.k.a condition) userInput != 5 will evaluate to false.
    console.log("User Input is not equal to 5."); // Meaning that this code will not be executed.
}

// EXAMPLE 3.2 - if, else if, else
let userInput2 = 10;
let userInput3 = 20;
if (userInput2 == 10) {
    console.log("First branch was executed.")
}
else if (userInput3 == 20) { // Even though this condition is true, the first branch was already chosen.
    console.log("Second branch was executed.")
}
else {
    console.log("Third branch was executed.")
}

//----------------------------------------------------------------------------------------------------------------------------

/* PART 4 - for loops

If some particular instruction, or set of instructions must be run multiple times, we do not just copy and paste the same thing
repeatedly. Instead, we use a for loop to iterate over a set of instructions a certain number of times. A for loop requires us
to provide a counter variable (a.k.a index) that increments (or decrements) each time the set of instructions is run.

For example lets say I want to add up all of the even numbers from 1 all the way to 100.
*/

// EXAMPLE 4.1
let sum = 0; // data type is a number
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) { // condition/expression to check if i is even.
        sum += i;
    }
}
console.log(sum);

// EXAMPLE 4.2
for (let i = 100; i > 0; i -= 7) {
    console.log(i)
}

//----------------------------------------------------------------------------------------------------------------------------

/* PART 5 - while loops

Similarly to a for loop, a while loop iteratively executes the block of code that you place inside of it.
The main difference between a for loop and a while loop is that a whereas a for loop require these 3 parts:
1. The counter variable (index)
2. The loop condition
3. The increment/decrement amount
A while loop only requires a single loop condition. This condition can be as complex as you want it to be,
however a while loop is more likely to give you an error than a for loop as it is easier to accidentally
define it to run forever.
*/


// EXAMPLE 5.1
let counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
}

// EXAMPLE 5.2
let index = 10;
let index2 = 100;
while (index < 100 && index2 > 50) {
    index++;
    index2--;
}
console.log(index);

// EXAMPLE 5.3
// let infiniteLoop = 100;
// while (infiniteLoop >= 0) {
//     if (infiniteLoop > 0) {
//         infiniteLoop--;
//     }
//     else if (infiniteLoop < 0) {
//         break;
//     }
// }

//----------------------------------------------------------------------------------------------------------------------------

/*Half-Time coding puzzle

 print out all odd numbers between 1 and 100 in backwards order.

*/

//----------------------------------------------------------------------------------------------------------------------------

/* PART 6 - Arrays
In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index:

[elem1, elem2, elem3, elem4]

You are allowed to have different data types stored in an array
*/

// EXAMPLE 6.1 
myArray = [1, 2, 3, 'cat', "dog", true, null];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//----------------------------------------------------------------------------------------------------------------------------

/* PART 7 - Functions

A function is a group of reusable code which can be called anywhere in your program. 
This eliminates the need of writing the same code again and again and allows us
to divide a big program into a number of small and manageable section/steps.

A function is defined by the following syntax:
function FUNCTION_NAME_HERE(PARAMETER_1, PARAMETER_2, PARAMETER_3, ..., PARAMETER_N)
*/

// EXAMPLE 7.1
function myCountingFunction() {
    let sum = 0; // data type is a number
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) { // condition/expression to check if i is even.
            sum += i;
        }
    }
    return sum;
}

// EXAMPLE 7.2
function mySumFunction(param1, param2, param3) {
    return param1 + param2 + param3;
}

// EXAMPLE 7.3
const myArrowFunction = () => {
    return 17;
}

// EXAMPLE 7.4
const higherOrderFunction = (someFunction) => {
    console.log(someFunction());
}
higherOrderFunction(myArrowFunction);

//----------------------------------------------------------------------------------------------------------------------------

/* PART 8 - Practice Exercises

1. 

*/


// For more info, please visit the link at the top of the document.