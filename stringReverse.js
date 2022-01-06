function stringReverse(str) {
    if(!str || str.length < 2) {
        return str
    }
    return str.toLowerCase().split('').reverse().join("")
}
console.log(stringReverse('hello'))