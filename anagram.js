// creating object containing characters
// and the number of time they occur
const charObject = str => {
    let chObject = {}
    for( let char of str.replace(/[^\w]/g).toLowerCase() ) {
        chObject[char] = chObject[char] + 1 || 1
    }
    return chObject
}

const anagram = (aChar, bChar) => {
    let aCharObj  = charObject(aChar)
    let bCharObj  = charObject(bChar)
    //check if both object has the same length
    if(Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
        return false
    }
    // theck if the objects contains the same number of data
    for(let char in aCharObj) {
        if(aCharObj[char] !== bCharObj[char]) {
            return false
        }
    }

    return true
}

console.log(anagram('friend', 'finder'))