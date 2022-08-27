// let anyString = 'sarfraj abbsi'


// console.log(anyString.substring(0, 1))
// console.log(anyString.substring(1, 0))


// console.log(anyString.substring(0, 6))


// console.log(anyString.substring(4))
// console.log(anyString.substring(4, 7))
// console.log(anyString.substring(7, 4))


// console.log(anyString.substring(0, 7))
// console.log(anyString.substring(0, 10))

// Displays 'ield' the last 4 characters
// let anyString1 = 'battlefield'
// let anyString4 = anyString1.substring(anyString1.length - 4)
// console.log(anyString4)

// // Displays 'field' the last 5 characters
// let anyString = 'battlefield'
// let anyString5 = anyString.substring(anyString.length - 5)
// console.log(anyString5)

// let text = 'interasteller'
// console.log(text.substring(2,5))  
// console.log(text.substr(2,3)) 



let text = 'sarfraj'
console.log(text.substring(5, 2))  
console.log(text.slice(5, 2))     
console.log(text.slice(-5, 2))   
console.log(text.slice(-5, -2)) 



// Replaces oldS with newS in the string fullS
function replaceString(oldS, newS, fullS) {
  for (let i = 0; i < fullS.length; ++i) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
      fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length)
    }
  }
  return fullS
}

console.log(replaceString('World', 'Web', 'Brave New World'));


function replaceString(oldS, newS, fullS) {
  return fullS.split(oldS).join(newS)
}
console.log(replaceString('World', 'Web', 'Brave New World'))