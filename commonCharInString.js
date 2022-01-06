function commonCharInString(str) {
    let stringObj = {}
    for( let i of str ) {
        stringObj[i] = stringObj[i] + 1 || 1
    }
    let keyWithHighestValue = Object.keys(stringObj).reduce( (a,b) => {
        return stringObj[a]  >  stringObj[b] ? a : b
    })
    return keyWithHighestValue
}
commonCharInString('maalikm')