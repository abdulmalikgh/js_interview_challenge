function longestStringInAnArray(arr) {
    let longestString = ''
    arr.forEach( string => {
        if(string.length > longestString.length) {
            longestString = string
        }
    })
    return longestString
}
