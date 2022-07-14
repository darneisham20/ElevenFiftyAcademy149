// HOISTING: storing a variable in memory so that it can be referenced / used throughout the program
// Creation Phase: any variables (var, const, let) OR functions from code being stored in memory
// Execution Phase: values being assigned to the variable/function that were stored in memory during creation phase 

/*
    SYNTAX 

    (create) (execute)
    let variable = value 
*/

// Function Declaration
sayHi()

function sayHi() {
    console.log("HI")

    let hi = "Waddup"
    console.log(hi)
}

// Function Expression

let varFunc = function() {
    console.log("fart")
}

varFunc()