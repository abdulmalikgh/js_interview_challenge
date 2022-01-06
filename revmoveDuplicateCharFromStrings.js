function dupString(str) {
    let stringArr = [...new Set(str)]
    return stringArr.join("")
}