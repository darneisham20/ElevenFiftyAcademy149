// VARIABLES

// Variables are named containers that store data.
// Variables are named so that we can refer to them later and put values into them.

// Run code: CTRL + ALT + N

/*
    SYNTAX

    let nameOfVariable = value;
    (1)     (2)       (3)  (4)

    1. Let is a JS keyword that denotes that this is a variable and we are creating it.
    2. The name of the variable (which we can use to reference later). 
    3. Assignment operator (=).
    4. The actual value that the variable holds.
*/

let firstName = "Neisha";
console.log(firstName);

let greeting; // Declaration. This is the left side of the assignment operator (=).
console.log(greeting);

greeting = "hello there"; //Initialization. Everything on the right side of the assignment operator (=). This is giving my variable a value. 
console.log(greeting);

/* 
    3 different keywords to declare a variable:
    1. let - This is the standard keyword. We can use let to reinitialize and/or change our value with this keyword. 
    2. const - This keyword stands for "constant". We can NOT reinitialize or change our value with this keyword. 
    3. var - This keyword is a lot like "let" though it's not as good with error handling. Tis deprecated. DO NOT USE THIS KEYWORD. It is our BRUNO (we don't talk about Bruno).
*/

const lastName = "Fouts";
console.log(lastName);
// lastName = "Ervin";
// console.log(lastName); 

// Naming Conventions
// There's no limit to the length of your variable name. 
// You can't use a number as the first character. Can't have spaces between your variable names. No punctuation with your variable names. 
// $, _, or any letter can be used for naming variables. 

let niceGreeting = "Hello there"; //camelCasing

let NiceGreeting = "Oh hi there!"; //PascalCasing

let nice_Greeting = "Howdy"; // snake_Casing

let $niceGreeting = "Hey"; 

console.log(NiceGreeting); //OUTPUT: Oh hi there!