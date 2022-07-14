let count = 0;

const doSomething = () => {
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");

    const name = nameInput.value
    const age = ageInput.value
    // count = count + 1
    count++

    alert(`Whats up ${name}? Your age is ${age}`)
    nameInput.value = ""
    ageInput.value = ""
}