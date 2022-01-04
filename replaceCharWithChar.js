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

console.log(replaceCharWithChar("hello world", 'l', 'x'))