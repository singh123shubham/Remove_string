function removeString(string,character){
    let regex = new RegExp(character,"gi")
    return string.replace(regex, '')
}

console.log(removeString("Shubham singh","h"))

console.log(removeString("nitin","n"))