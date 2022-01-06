function sortString(str) {
    return str.toLowerCase().split("").sort().join('')
}
function simplifiedAnagram(stringOne, stringTwo){
    if(stringOne.length !== stringTwo.length) return false
    return sortString(stringOne) === sortString(stringTwo)
}
console.info(simplifiedAnagram('friend','finder'))