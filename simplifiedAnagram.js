function sortString(str) {
    return str.toLowerCase().split("").sort().join('')
}
function simplifiedAnagram(stringOne, stringTwo){
    if(stringOne.length !== stringTwo.length) return false
    return sortString(stringOne) === sortString(stringTwo)
}
// trim str.replace(/[^\w]/g).join()
console.info(simplifiedAnagram('friend','finder'))