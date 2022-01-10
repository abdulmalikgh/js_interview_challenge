function upperCaseFirstLetter(str) {
    let firstLetter = str.charAt(0)
    let firstLetterToUpperCase = firstLetter.toUpperCase()
    let remainingChars = str.slice(1)
    let capitilizeString = firstLetterToUpperCase + remainingChars
    return capitilizeString
}
function titleCaseAString(str) {
    const strArray = str.split(" ")
    let capititalizeStrArray = strArray.map( word => upperCaseFirstLetter(word))
    return capititalizeStrArray.join("")
}

titleCaseAString('remainingChars hello how are you doing')