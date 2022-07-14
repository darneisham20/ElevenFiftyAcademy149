// SCOPE: hierarchy of variables in our code (access rights for variables)
// GLOBAL SCOPE: (Parent Scope)
// LOCAL SCOPE: (Child Scope)

let global = "Earth"

function scopeExample() {
    // remembered for as long as the function executes, then forgotten about
    let local = "Indy"

    console.log(local)
    // Template Strings (template literals) = ` `
    console.log(`I'm in ${local} which is a part of ${global}`)
}

scopeExample()