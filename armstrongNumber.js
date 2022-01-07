//An armstrong sum is the summ of the powers of 
//individual numbers of a number to the numbers of the number
function armstrongNumber(numb) {
 if(!typeof numb === 'number') {
    return;
 }
 const numbToString = numb.toString().split('')
 const numbLength = numbToString.length
 const numbToStringSum = numbToString.map( x => Math.pow(x,numbLength)).reduce( (a,b) => a + b) 
 return numbToStringSum == numb
}
console.log(armstrongNumber(153))