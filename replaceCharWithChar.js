function replaceCharWithChar(string, replaceThis, withThis) {
    let result = []
    for(let char of string) {
        if(char == replaceThis) {
            result.push(withThis)
        } else {
            result.push(char)
        }
    }
    return result.join("")
}
function simplified(string, replaceThis, withThis) {
    let replacedArr = string.split("").map( el => el == replaceThis ? withThis : el)
    return replacedArr.join("")
}
console.log(simplified("hello world", 'l', 'x'))