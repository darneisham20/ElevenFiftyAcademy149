// ARRAYS 

/*
    Arrays are contianers that hold lists of items. THey are denoted by there [] (square brackets). They can hold multiple data types. They are great for creating lists.
*/

/*
    SYNTAX

    let arrayVariableName = [ list1, list2, list 3 ];
*/

let groceryList = [
    "milk", // 0
    "chicken", // 1
    "garlic", // 2
    "apples", // 3
    "swedish fish", // 4 
    "avacados", // 5
];

console.log(groceryList); //OUTPUT: Is the entire groceryList.
console.log(groceryList[4]); //OUTPUT: swedish fish
// BRACKET NOTATION - used to step into array and grab a list item. 
// NOTE: Arrays start counting at an index of 0. 

let students = [
    "Nelson",
    "Clarissa", 
    "Laura", 
    "Cassandra", 
    "Noah", 
    11, 
    true, 
    ["Michael", "Tonya", "Neisha"]
];

console.log(typeof students); //OUTPUT: object. And that's because arrays are objects.
console.log(students instanceof Array);
// NOTE: instanceof operator is used to check the type of an object at runtime.

// CHALLENGE

// Dive into the nested array and print out the value "Michael". 
// Print out "Hello Michael! Nice to meet you"

console.log(students[7][0]); //OUTPUT: Michael
let sName = students[7][0];
console.log("Hello, " + sName + "! Nice to meet you."); // OUTPUT: Hello, Michael! Nice to meet you. CONCATENATION.
console.log(`Hello, ${sName}! Nice to meet you.`); //OUTPUT: Hello, Michael! Nice to meet you. STRING INTERPOLATION - uses the backticks and dollar sign curly brackets. 

// ARRAY METHODS
// Array methods allow us to manipulate the data inside or our array or the array itself.

// .length - simply returns the number of items in our array.
// let foods = ["pizza", "shrimp", "sushi", "dino nuggets"];
console.log(foods.length); //OUTPUT: 4 (Because there are four items within our array)

// .toString() - this method takes an array and converts it to a string (including all of the items in it).
let randomArray = [5, "David", "Tiramisu", true, -1000];
console.log(typeof randomArray.toString()); //OUTPUT: Converts an array into a string. 

// .shift() - this method removes the first item of an array and return the removed item. 
let foods = ["pizza", "shrimp", "sushi", "dino nuggets"];
console.log("Before : ", foods); //OUTPUT: Original Array

let firstItem = foods.shift();

console.log("After : ", foods); //OUTPUT: Array removing pizza
console.log("Shifted Item : ", firstItem); //OUTPUT: pizza in my firstItem variable

// .unshift() - this method adds an item to the beginning of our array
console.log("Before : ", foods); //OUTPUT: Array without pizza because of the shift method

foods.unshift("rice and chicken"); //Adding "rice and chicken" to our foods array.

console.log("After : ", foods); //OUTPUT: "rice and chicken" being added to the beginning of our array.

// ANOTHER EXAMPLE
let num = [1, 2, 3, 4, 5];
num.unshift(0);
console.log(num); //OUTPUT: [ 0, 1, 2, 3, 4, 5]

// .pop() - similar to the shift method, except it removes the last item in an array and returns the removed item. 

let sailorScouts = ["Moon", "Mars", "Saturn", "Venus", "Jupiter"];
sailorScouts.pop();
console.log(sailorScouts); //OUTPUT: Is our array without Sailor Jupiter.

// .push() - this method adds an item to the END of our array and returns the removed item. 
sailorScouts.push("Mercury");
console.log(sailorScouts);

// .reverse() - this method reverses all of the items in an array.
let pokemon = ["Pikachu", "Charmander", "Squirtle", "Vaporeon", "Bobosaur"];
console.log(pokemon.reverse()); //Bobosaur is fist.

// .splice() - this method changes the content of our array. It can remove/replace exisiting items and/or adding new items in its place.
// NOTE: IT CAN take on 3 parameters. 
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // I start at the index of 1, remove nothing, then add a string of "Feb".
console.log(months); //OUTPUT: Feb added to our months array.

months.splice(4, 1, "May");
console.log(months); //OUTPUT: I started at index of 4 (June), remove 1 item, and then added a string of "May". 

months.splice(5, 0, "June", "July", "August");
console.log(months); //OUTPUT: I start at index of 5, remove nothing, and then add multiple strings of "June", "July", "Aug". 

/*
METHODS THAT YOU SHOULD LOOK UP:
    - .join(), 
    - .sort(), <---- IMPORTANT
    - .some(),
    - .find(), <---- IMPORTANT
    - .map(), <---- IMPORTANT
    - .includes() <---- IMPORTANT
*/