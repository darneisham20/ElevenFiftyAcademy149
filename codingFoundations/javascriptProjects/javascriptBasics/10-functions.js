// FUNCTIONS
function hello() {
    console.log("Hello World!");
}

hello(); // invokes the function hello.

// FUNCTIONS can also accept values known as arguments if the correct parameters are set up
/*
    Two things to know up front:
        Parameters are the names listed in the parentheses of the function definition
        Arguments are the real values recieved by the function when you call it
*/

// Single Parameter Functions
function numberEntered(num) {
    console.log(`The number you entered was: ${num}`);
}

numberEntered(5);
numberEntered(4);
numberEntered(3);
numberEntered(2);
numberEntered(1);

// Multiple Parameter Functions
function addAnyTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addAnyTwoNumbers(4, 5); //OUTPUT: 9
addAnyTwoNumbers(6, 11); //OUTPUT: 17
addAnyTwoNumbers(7, 8); //OUTPUT: 15


// The return keyword is something that will be used along with functions
/*
    Things to know:
        The return keyword stops the execution of a function.
        The return keyword "pushes" information out of a function and makes it available to use elsewhere
        return and console.log are two different things with different behaviors
*/
function getMyBattingAverage(atBats, numberOfHits) {
    let myAverage = numberOfHits / atBats;
    return myAverage;
}
console.log(getMyBattingAverage(250, 91)) //OUTPUT: 0.364

// Console.lov vs. Return
/*
    console.log: The console.log() method outputs a message to the web console. The message may be a single string (with optional subsitution values), or it may be any one or more JavaScript objects.
    return: The return statement ends function execution and specifies a value to be returned to the function caller.
*/

function add(x, y) {
    let sum = x + y;
    return sum;
}
console.log(add(1, 1)); //OUTPUT: 2

function fullName(first, last) {
    let wholeName = first + " " + last;
    return wholeName;
}
console.log(fullName("Paul", "O'Connor")); //OUTPUT: Paul O'Connor

function calculatePrice(quantity, price) {
    let totalPrice = 1.07 * quantity * price;
    return totalPrice;
}
console.log(calculatePrice(17, 5)); //OUTPUT: 90.95
