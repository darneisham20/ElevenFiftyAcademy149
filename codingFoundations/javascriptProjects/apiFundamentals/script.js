// API (Application Program Interface) endpoint URL to GET information back from API
    // Info will come back (after the promise has been fulfilled)to us as a JSON "string" before being converted into a JavaScript object 

const baseURL =  "https://rickandmortyapi.com/api/character"
const containerDiv = document.getElementById('container')

const searchDiv = document.getElementById('searchContainer')

// Method used by JS to "fetch" information to / from an API and return a PROMISE meaning it will "promise" to return data once "fetching" process has finished
fetch(baseURL)
    // First need to transform "Fulfilled" promise into JSON (JavaScript Object Notation)
    .then(res => res.json())
    // ".json" - returns a promise that we "fulfill" using the second ".then()"
    .then(data => {
        console.log(data.results)

        data.results.forEach(character => {
            makeCharDiv(character.image, character.name, character.origin.name, character.status, containerDiv)
        });
    })

    const getCharResults = (e) => {
        e.preventDefault()

        const searchInput = document.getElementById("search")

        fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
            .then(res => res.json())
            .then(data => {
                // THIS IS USED BECAUSE THE ".catch()" DID NOT WORK!!
                if(data.error) {
                    const errorMessage = document.createElement("h4")

                    errorMessage.textContent = data.error
                    errorMessage.style.color = "red"

                    searchDiv.appendChild(errorMessage)
                } else {
                    searchDiv.innerHTML = ""

                    data.results.forEach(char => {
                        makeCharDiv(char.image, char.name, char.origin.name, char.status, searchDiv)
                    })
                }

            })
            // ".catch()" is used to "catch" any 400/500 errors that may have ocurred during the fetch request
            // .catch(error => {
            //     console.log(error)
            // })

        searchInput.value = ""
    }

    const makeCharDiv = (image, name, originName, status, divForInfo) => {
        const charDiv = document.createElement('div')

        const charPic = document.createElement('img')
        const charName = document.createElement('h3')
        const charOrigin = document.createElement('p')
        const charStatus = document.createElement('p')

        charPic.src = image
        charName.textContent = name
        charOrigin.textContent = originName
        charStatus.textContent = status === "Alive" ? `${name} is thriving! B-)` : "This mf is dead or lost."

        // Putting character information inside "charDiv"
        charDiv.appendChild(charPic)
        charDiv.appendChild(charName)
        charDiv.appendChild(charOrigin)
        charDiv.appendChild(charStatus)

        // Putting "charDiv" inside HTML "container" div
        divForInfo.appendChild(charDiv)
    }