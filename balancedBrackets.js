//Questions to be asked 
//what do you mean by balanced braces
function balancedBrackets(str) {
    const stack = []
    const openers = ['[','{','(']
    const closers = [']','}',')']
    const openAndClosing = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    for(let char of str){
        if(openers.includes(char)){
            //push all opening bracketet to the stack
            stack.push(char)
        } else if(closers.includes(char)) {
            //check if there is a braces in the stack
            if(!stack.length) return false
            //if opening element does not match the corresponding 
            if(openAndClosing[stack.pop()] !== char) return false
        }
    }
    return stack.length === 0
}
console.log(balancedBrackets('7-(3(2*9))4) (1'))