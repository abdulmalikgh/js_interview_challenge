function findSumPairs(arr, value) {
    console.log(arr)
    let sumsLookup = {}
    let output = []
    for(let i = 0; i < arr.length; i++) {
        let targetValue = value - arr[i]
        if(sumsLookup[targetValue]) {
            output.push(new Array())
        }
        sumsLookup[arr[i]] = true
    }
    return output
}
let arr = [1,5,6,1,0,1];
findSumPairs(arr,6)