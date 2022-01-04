let fibonacciSum = num => {
    let sequence = [0,1]
    if(num < 2) {
        return sequence
    }
    for( let i = 2; i <= num; i++) {
        let prev1 = sequence[i-1]
        let prev2 = sequence[i-2]
        sequence.push(prev1 + prev2)
    }

    return sequence[num]
}
let fibonacci = (num) => {
    if(num < 2) {
        return num;
    }

    return fibonacci(num - 1 ) + fibonacci(num - 2)
}
console.log(fibonacci(9))