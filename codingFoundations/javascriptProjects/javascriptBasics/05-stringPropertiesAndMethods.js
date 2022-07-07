// STRING PROPERTIES

/*
    Properties are qualities associated with a datatype
    Strings have 3 properties 
    The length property is the most popular one that developers prominently use. 
*/

/*
    SYNTAX
    string.propertyName
*/

// length property - determines the length of a string. 

// let myName = "Taylor"; // OUTPUT: 6
let myName = "Taylor is my first name!" // OUTPUT: 24 
// NOTE: the length property also accounts for spaces and punctuation in your string. 
console.log(myName.length);

// STRING METHODS
// Methods are tools thta can help us manipulate our data. 

/*
    SYNTAX
    string.methodName()
*/

// toUpperCase method - capitalizes your string.
let yourNameIs = "CaSsAnDrA";
console.log(yourNameIs.toUpperCase()); // OUTPUT: CASSANDRA

// includes method - this method checks to see if a certain string is "included" (or nested) inside of your string. 
let home = "My home is Texas"; 
console.log(home.includes("Texas")); //OUTPUT: true because "Texas" exists in our string. 
console.log(home.includes("texas")); //OUTPUT: false because "texas" DOES NOT exist in our string. Javascript is case-sensitive. 

let home2 = "My home is Texas part 2";
console.log(home2.includes(2)); //OUTPUT: true because the includes method is NOT comparing Data Types.
// NOTE: the includes method is NOT exclusive to just strings. 