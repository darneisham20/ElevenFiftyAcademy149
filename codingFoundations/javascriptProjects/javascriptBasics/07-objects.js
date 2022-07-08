// OBJECTS
// Objects use multiple data types that consist of key/value pairs.
// Objects are denoted by their curly bois {}.

/*
    SYNTAX

    let objectVariableName = {
        key (property): value,
        key: value,
        key: value
    }
*/

let name = {
    firstName: "Taylor",
    lastName: "Dickens",
    firstNameLetters: 6
}

console.log(name); //OUTPUT: the object in its entirety

let netflix = {
    name: "Avatar the Last Airbender",
    seasonInfo: {
        season1: {
            numberofEpisodes: 10,
            episodeInfo: [
                {episode: 1, episodeName: "The Boy in the Iceberg"},
                {episode: 2, episodeName: "The Avatar Returns"},
            ],
        },
    },
};

console.log("All data : ", netflix); //OUTPUT: netflix object. All the data from above.
console.log("Name of Netflix Series : ", netflix.name); //OUTPUT: Avatar the Last Airbender
// DOT NOTATION - allows us to step into our object and grab data.
console.log("Season 1 of Avatar the Last Airbender", netflix.seasonInfo.season1); //OUTPUT: all the season 1 information. We can follow the relative path to get the information that we want in our object. 
console.log("Second Episode Name :", netflix.seasonInfo.season1.episodeInfo[1].episodeName); //OUTPUT: Second Episode Name : The Avatar Returns

// ASSIGN NEW KEYS TO OBJECTS USING DOT NOTATION
// SYNTAX: objectVariableName.keyName.keyName.nameOfNewKey = value;
netflix.seasonInfo.totalSeasons = 3;
console.log(netflix.seasonInfo); //OUTPUT: newly added key in our seasonInfo object.

// ALL ARRAYS ARE OBJECTS
// This is how it looks on the backend:
//                             0         1       2       3       4
let bobBurgersCharacters = ["Linda", "Louise", "Bob", "Tina", "Gene"];
// let bobBurgersCharacters = {
//     0 : "Linda",
//     1 : "Louise",
//     2 : "Bob",
//     3 : "Tina",
//     4 : "Gene"
// }

// JSON - Javascript Object Notation
/*
    JSON is used to send information from servers and clients and vice versa. JSON looks and acts like an object, but they are different. We can use dot notation and bracket notation to access the information within these "objects".

    NOTE: This is something for later. We wil get to this once we get to APIs.
*/

let howlsMovingCastle = {
    wizards: {
        wizard1: "Howl",
        wizard2: "Markle",
        wizard3: "The Witch of the Waste",
    },
    humans: {
        human1: "Sophie",
        human2: "Lettie",
        human3: "Honey",
    },
}

// Object.keys() method - this method returns an array of an Object's keys (property) names.
console.log(Object.keys(howlsMovingCastle.wizards)); //OUTPUT: wizard1, wizard2, wizard3
console.log(Object.keys(howlsMovingCastle.wizards.wizard3)); //OUTPUT: the indices in the string of wizard 3 (0-21) because it is looking at a string as an array. AND ARRAYS ARE OBJECTS.

// Object.values() method - this is a method that returns an array of a given object's values. 
console.log(Object.values(howlsMovingCastle.humans)); //OUTPUT: "Sophie", "Lettie", "Honey"
console.log(Object.values(howlsMovingCastle.humans.human1)); //OUTPUT: 'S', 'o', 'p', 'h', 'i', 'e'
