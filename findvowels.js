function findVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for(let char of str) {
        console.log(char)
        if (vowels.includes(char)) {
            count++
        }
    }
    return count
}
