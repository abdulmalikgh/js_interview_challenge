const parlindrome = function(string) {
    const str = string.toLowerCase()
    const rStr = str.split("").reverse().join("")
    console.log('string', str, 'reversed', rStr)
    return str === rStr
}

function reverseString(str) {
    return str.split('').reverse().join("")
}
console.log(parlindrome('Anna'))