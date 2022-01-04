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
    console.log(capititalizeStrArray.join(" "))
    return capititalizeStrArray.join("")
}

titleCaseAString('remainingChars hello how are you doing')