const doSomething = () => {
    const userDate = document.getElementById("age").value // YYYY-MM-DD
    const tDate = new Date();
    const date = tDate.getFullYear() + '-' + '0' + (tDate.getMonth() + 1) + '-' + tDate.getDate();

    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("savings");

    const name = nameInput.value
    const savings = savingsInput.value
    // Indexing into strings with []
    const age = Number(date.substring(0,4)) - Number(userDate.substring(0,4))

    makeNewElement(name, age, savings)
    nameInput.value = ""
    savingsInput.value = ""
}

const makeNewElement = (name, age, savings) => {
    const container = document.getElementById("container")

    const contentWrapper = document.createElement("div")
    const nameHeader = document.createElement("h3")
    const ageText = document.createElement("p")
    const savingsText = document.createElement("p")

    nameHeader.textContent = name
    ageText.textContent = age
    savingsText.textContent = `$ ${savings}.00`

    ageText.style.backgroundColor = "red"
    ageText.style.color = "white"

    savingsText.style.color = "green"

    contentWrapper.appendChild(nameHeader)
    contentWrapper.appendChild(ageText)
    contentWrapper.appendChild(savingsText)

    container.appendChild(contentWrapper)
}