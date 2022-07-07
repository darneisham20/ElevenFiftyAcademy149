// OPERATORS

// ASSIGNMENT OPERATOR
// The = sign in between our variableName and our values. Help assign values to our declarations.
let r = 5; 

// COMPARISON OPERATORS
// EQUAL TO 
console.log(3 == 3); // OUTPUT: true
console.log("3" == 3); // OUTPUT: true
// COERCION is happening and JS assumes that we are doing "3" == "3". It converted that number into a string. 

// STRICT EQUAL TO
console.log("3" === 3); // OUTPUT: false
// COERCION does NOT happen here. So strictly equals to is checking the data type and the value. 

// NOT EQUALS TO
console.log("3" != 3); // OUTPUT: false because coercion is happening and "3" does equal "3"(We're not type checking here)

// STRICTLY NOT EQUAL TO
console.log("3" !== 3); // OUTPUT: true because the string data type of 3 does NOT equal the number 3

// GREATER THAN 
console.log(3 > 2); 

// LESS THAN
console.log(2 < 3);

// GREATER THAN OR EQUAL TO
console.log(3 >= 2);

// LESS THAN OR EQUAL TO
console.log(2 <= 3);

// AND &&
console.log(2 < 3 && 3 > 2); // true: both expressions on either side of && are true. 
console.log(2 < 3 && 3 < 2); // false: 3 < 2 and the other expression is true so we get false.
console.log(5 < 4 && 12 > 24); // false: they are both false expressions and doesn't produce a true expression. Both expressions have to be true in order for the output to be true.

// OR ||
console.log(2 < 3 || 3 < 2); // true: one of our statements is true. 

// LOGIC OPERATORS

// ADDITION
r = r + 1;
r += 1;

// SUBTRACTION
r = r - 1;
r -= 1;

// MULTIPLICATION
r = r * 1;
r *= 1;

// DIVISION
r = r / 1;
r = r/= 1; 

// EXPONENTIAL
r = r ** 1;
r **= 1;

// MODULUS: remainder of whatever is being divided ex: 2 can go into 5 twice, 1 is leftover
console.log(5 % 2);