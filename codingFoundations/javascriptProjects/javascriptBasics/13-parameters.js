// PARAMETERS
// A parameter is a newly defined "variable" in the context of a function that hasn't been provided a value yet
// The name of the parameter should reflect some type of relationship with the data that's expected to be passed when the function is being executed

/*
    SYNTAX:

    function nameFunc(parameter1, parameter 2) {
        console.log(`This is ${parameter1}. They are ${parameter 2} years old`)
    } 

*/

function coffeePot(filter) {
    console.log(`This is a ${filter} coffee`)
}

coffeePot("dark roast")
coffeePot("caramel")
coffeePot("peppermint")

// Function Reference
let kettle = coffeePot

kettle("nachos")

// Multiple Parameters

function tellBio(name, age, hairColor, height) {
    console.log(`This is ${name}\nAge: ${age}\nHeight: ${height}\nHair Color: ${hairColor}`)
}

tellBio("Michael Jordan", 63, "bald", "6'6")
tellBio("Beyonce", 50, "blondish brown", "5'8")

// RETURN VALUES

function calc (num1, num2, num3) {
    let total = num1 + num2 + num3
    let avg = Math.round(total / 3)

    return avg
}

calc(1, 2, 3) // <- These results will not show anywhere, you need to actually store it within a variable for the code to run it. Otherwise it'll "skip" over this portion of the code.

let avgNum = calc(153, 23042, 249)

console.log(`Average: ${avgNum}`)

/*
CHALLENGE

- Write a function that accepts name and grade as parameters, and then

prints "NAME got a GRADE in social studies" to the console.

*/

function school(name, grade) {
    console.log(`${name} got a ${grade} in social studies.`)
}

school("Neisha", "B")