// Types

// Anything on the right side of the assignment operator (=). They are the 'value', the data that we store for later. There are two types of data types (at least we'll be going over today: Primitive and Complex).

// BOOLEANS
// A boolean has only two types of possible values: true or false. 

let on = true;
console.log(on);

let off = false; 
console.log(off);

// Strings
// Strings are going to represent plain text and will be wrapped in either single or double quotes. 
// NOTE: We can use single or double quotes. JS can read them both as strings. HOWEVER, the opening quotation should match the closing quotation. 

let quote = "Hello there!";
console.log(quote); 

// let quotation = '"This is a quotation"';
let quotation = "\"Hello there\"";
console.log(quotation);

let loremIpsum =
    "Cupcake ipsum dolor sit amet. Chocolate halvah chocolate chupa chups sweet lemon drops powder cake jujubes. Sweet roll macaroon pastry gummi bears chocolate bear claw. Cake pie oat cake sesame snaps halvah marzipan soufflé tart macaroon. Biscuit I love danish chocolate bar danish liquorice ice cream. Sweet roll bear claw ice cream chocolate cake I love sesame snaps donut biscuit donut. Carrot cake cake chocolate gummies carrot cake tart cotton candy jelly-o. Topping cake I love gummies donut. Toffee I love wafer biscuit marshmallow jelly beans. Candy chocolate cake chocolate cake cupcake tootsie roll I love cheesecake chocolate. Apple pie lollipop chupa chups cake I love dragée dragée topping. Tootsie roll croissant tiramisu powder dessert marzipan pastry. Jelly cotton candy powder pie gummi bears I love macaroon cake cake. Croissant topping cheesecake I love candy bear claw icing.";
// NOTE: You can have 9 quadrillion characters in your string. 
let noWords = "";


// NUMBERS
// Numbers are gonna be quite literally numbers. No special characters required. 
// NOTE: We can go up to 9 quadrillion for our numbers. 

let temp = 38;
console.log(temp);

let percise = 999999999999999; // 15 9s
console.log(percise); 

let rounded = 9999999999999999; //16 9s
console.log(rounded); //OUTPUT 10000000000000000 JS is terrible at math. IT likes to round up after a specific amount of characters. 

let someMath = 0.2 + 0.1; //JS at a certain number starts to round up. (the 16th place) If math is needed BE AWARE.
console.log(someMath);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; //JS CAN do math, it just needs some extra steps.
console.log(numbersAreHard); //OUTPUT: 0.3

// NUMBERS VS STRINGS
let first = 1050 + 100; 
console.log(first); //OUTPUT: 1150; Addition. Still a number.

let second = "1050" + "100";
console.log(second); //OUTPUT: 1050100; Concatenation. This is a string. 
// CoNCATENATION - adding one string with another string to combine them to create a new single string. We are just appending them together.

console.log(typeof first);
console.log(typeof second);

let firstName = "Michael";
let lastName = "Theye";

let fullName = firstName + " " + lastName;
console.log(fullName); //OUTPUT: Michael Theye

let third = 1050 + "100";
console.log(typeof third); //OUTPUT: 1050100; Coercion.
// COERCION - Is when JS assumes when we are adding a number and a string together that they are gonna be strings.

// NULL
// Null acts as an empty container. It has nothing in it, but it still exists as a space to be filled. 

let empty = null;
console.log(empty);

// UNDEFINED
// Undefined has NO value to be assigned and does NOT act as an empty container. 
let correct; 
console.log(correct);

// let incorrect = undefined;
// NOTE: You CAN technically do this, it's just not best practice.

// NULL VS UNDEFINED
// Null is a container with nothing in it. 
// Undefined is a variable has not been assigned a value, nor has it been created yet. 

// Think of a UPS store. 
// Null is a package that has been assembled. It is waiting for something to be put inside of this assembled  box. 
// Undefined is a package that is not assembled yet. It still needs to be assembled and have something packed inside of it. 
