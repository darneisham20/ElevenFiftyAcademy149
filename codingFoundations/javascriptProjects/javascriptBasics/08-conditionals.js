// CONDITIONALS

// Conditionals control the behavior of JS and determines whether or not pieces of code are allowed to run (either or situation). They are used to preform different actions based on certain conditions.

/*
    TRUTHY VALUES: 
    - true
    - {}
    - []
    - 42/-42 (positive or negative integers)
    - "0" / "false" //Has to be a string that is not empty!

    FALSY VALUES: 
    - false
    - null
    - undefined
    - 0
    - NaN (NOT A NUMBER)
    - " " //Empty string

    NOTE: A conditional will only run if it is a "truthy" value. (If the condition is true).
*/

/*
    SYTAX:

    if (condition) {
        NESTED LOGIC
    }
*/

// let snowing = true;

if (snowing == true) {
    console.log("It is snowing outside!");
}

if (snowing) {
    console.log("It is still snowing!");
}

let snowing = false;

if (snowing == false) {
    console.log("It stopped snowing. It's too warm");
}

if (snowing) {
    console.log("It is not snowing. Bummer!");
}

let weather = 65;

if (weather < 70) {
    console.log("Wear a coat 'cause it is too dange cold!");
}

// IF ELSE - if the first condition is false, then it will run the next block of code as a default.

let kittens = 3;

if (kittens < 1) {
    console.log("I need more kittens");
} else {
    console.log("I have enough kittens");
}

// ELSE IF - specifies a new condition to test, if the first condition is false.

let apples = 14;
if (apples < 10) {
    console.log("Not enough apples.");
} else if (apples < 15) {
    console.log("Still not enough apples.");
} else {
    console.log("Just right.");
}

// SWITCH STATEMENTS - execute a block of code depending on different cases
// NOTE: Switch statements are gonna act like our conventional conditionals just using different syntax.

// break - keyword that breaks out of the switch block. Break stops the execution of more code or case testing inside of the block.
// default - acts as our else keyword.
// case - acts as our () to hold our condition...kind of?...ish?

let harryPotterCharacter = "Hermione"; 

switch (harryPotterCharacter) {
    case "Harry Potter": // <- the " : " acts as {}
        console.log("IS a whiny boy");
        break;
    case "Hermione":
        console.log("Great character. 10 out of 10 would recommend.");
        break;
    case "Ron":
        console.log("Eats food, I guess.");
        break;
    default: 
        console.log(`I'm sorry, ${harryPotterCharacter}, but do I know you?`);
}

// If you take out the " break " keyword, the OUTPUT would be "Great character. 10 out of 10 would recommend. Eats food, I guess. I'm sorry, Hermione, but do I know you?"

/*
    CHALLENGE
    Using a switch statmenet, write a dessert menu;
    If the dessert is pie, console.log("Pie, pie, pie, me oh my");
    If the dessert is cake, console.log("Cake is great");
    If the dessert is ice cream, console.log("I scream for ice cream");
    Otherwise, have your switch statement console.log("Not on the menu!")
*/

let dessert = "PIE";

switch (dessert) {
    case "PIE":
        console.log("Pie, pie, pie, me oh my!");
        break;
    case "Cake":
        console.log("Cake is great!");
        break;
    case "Ice Cream":
        console.log("I scream for ice cream!");
        break;
    default:
        console.log("Not on the menu!");
} // OUTPUT: Pie, pie, pie, me oh my! 

// SWITCH STATEMENTS WITH MULTIPLE CONDITIONS
let num = -40;

switch (true) {
    case num < 0 && num > -10: 
        console.log("Oh hey there!");
        break;
    case num > 0: 
        console.log("Hey friend!");
        break;
    default:
        console.log("So long, buddy!");
} // OUTPUT: So long, buddy!

// TERNARIES - This is the shorthand way of writing out if/else and else/if statements
// NOTE: The only difference between ternaries and if/else is the syntax.

let number = 6;

if (number > 0) {
    console.log("Yes, your number is greater than 0.");
} else {
    console.log("No, your number is not greater than 0.");
}

number > 0 
    ? console.log("Yes, your number is greater than 0.") 
    : console.log("No, your number is not greater than 0");

number == 0 ? console.log("Your number is equal to 0") : number < 0 ? console.log("Your number is less than 0") : console.log("Your number is greater than 0");

// NOTE: ternaries need a catch all (else) unlike our conventional if conditionals. If it doesn't have an else, it will give you an error.

/*
CHALLENGE
    Write out a conditional, then switch statement, and then ternary about ages. 
    If you're over the age of 18, print out "Yay! You can vote!"
    If you're over the age of 21, print out "Yay! You can drink!"
    If you're over the age of 25, print out "Yay! You can rent a car!"
    If you're younger than 18, print out "Sorry, you're too young to do anything fun."

    HINT: Make sure to check your work with different values.
*/

let myAge = 15;

if (myAge >= 25) {
    console.log("Yay! You can rent a car!")
} else if (myAge >= 21) {
    console.log("Yay! You can drink!")
} else if (myAge >= 18) {
    console.log("Yay! You can vote!")
} else {
    console.log("Sorry, you're too young to do anything fun.")
}

switch (true) {
    case myAge >= 25:
        console.log("Yay! You can rent a car!");
        break;
    case myAge >= 21:
        console.log("Yay! You can drink!");
        break;
    case myAge >= 18:
        console.log("Yay! You can vote!");
        break;
    default:
        console.log("Sorry, you're too young to do anything fun.")
}

myAge >= 25 ? console.log("Yay! You can rent a car!") : myAge >= 21 ? console.log("Yay! You can drink!") : myAge >= 18 ? console.log("Yay! You can vote!") : console.log("Sorry, you're too young to do anything fun.")

