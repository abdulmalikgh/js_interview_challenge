//parlindrome number
function parlindrome(string) {
  const inputString = string.toLowerCase()
  const reversedString = inputString.split('').reverse().join('')
  return inputString === reversedString
}
//  
let fibonocci = (num) => {
    if(num <= 2) return 1

    return fibonocci(num - 1) + fibonocci(num - 2)
}
function fizzbuzz(numb) {
  for(let num = 1; num <= numb; num++) {
    if(num % 3 === 0 && num % 5 === 0) {
      console.log('fizzbuzz')
    } else if( num % 3 === 0) {
      console.log('fizz')
    } else if (num % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(num)
    }
  }
}
//anagram
function charObject(str) {
  let string = str.replace(/[^\w]/g).toLowerCase()
  let charObj = {}
  for(let i of string) {
    charObj[i] = charObj[i] + 1 || 1
  }
  return charObj
}
function anagram(charA, charB) {
  let charAObj = charObject(charA)
  let charBObj = charObject(charB)

  if(Object.keys(charAObj).length !== Object.keys(charBObj).length) {
    console.log('i am here')
    return false
  }
  for(let i in charAObj) {
    if(charAObj[i] !== charBObj[i]) {
      return false
    }
  }

  return true
}

function vowels(str) {
  let vowels = ['a','e','i','o','u']
  let count = 0;
  for(let i of str) {
    if(vowels.includes(i)) {
      count++
    }
  }
  return count
}
console.info(vowels('fried'))
