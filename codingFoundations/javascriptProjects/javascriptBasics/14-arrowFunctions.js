// ARROW FUNCTIONS - Are not hoisted
// - "Concise" Body: No curly bracers - whatever is after "fat arrow" (=>) is automatically returned / executed
// - "Block" Body: Include {curly braces} and explicitly need "return" keyword to return any data

// Concise Body
// Automatically execute example:
let speak = (noise) => console.log(`${noise}! ${noise}!`)
speak("Bark")

// -Automatically return data after "fat arrow"
let showFullName = (first, last) => `${first} ${last}`

console.log(`Dude giving the lecture is named ${showFullName("TJ", "Hindman")}`)

// Block Body
// Include extra functionality (multiple lines of code) before specifying a "return" value
let speakAgain = (noise) => {
    let time = "later"

    console.log(`${noise} ${time}! ${noise} ${time}!`)
}

speakAgain("Meow")


let showThisName = (first, last) => {
    return `${first} ${last}`
}

showThisName("Mallory", "Fronterhouse")

console.log(`This girl is named ${showThisName("Mallory", "Fronterhouse")}`)