function removeDuplicateFromArray(arr) {
        let result = [...new Set(arr)]
        return result
}
console.log(removeDuplicateFromArray([1,2,3,3,4,5,6,6,7]))