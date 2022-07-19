// API (Application Program Interface) endpoint URL to GET information back from API
    // Info will come back (after the promise has been fulfilled)to us as a JSON "string" before being converted into a JavaScript object 

const baseURL =  "https://rickandmortyapi.com/api/character"
const containerDiv = document.getElementById('container')

// Method used by JS to "fetch" information to / from an API and return a PROMISE meaning it will "promise" to return data once "fetching" process has finished
fetch(baseURL)
    // First need to transform "Fulfilled" promise into JSON (JavaScript Object Notation)
    .then(res => res.json())
    // ".json" - returns a promise that we "fulfill" using the second ".then()"
    .then(data => {
        console.log(data.results)

        data.results.forEach(character => {
            const charDiv = document.createElement('div')

            const charPic = document.createElement('img')
            const charName = document.createElement('h3')
            const charStatus = document.createElement('p')

            charPic.src = character.image
            charName.textContent = character.name
            charStatus.textContent = character.status === "Alive" ? `${character.name} is thriving! B-)` : "This mf is dead or lost."

            // Putting character information inside "charDiv"
            charDiv.appendChild(charPic)
            charDiv.appendChild(charName)
            charDiv.appendChild(charStatus)

            // Putting "charDiv" inside HTML "container" div
            containerDiv.appendChild(charDiv)
        });
    })