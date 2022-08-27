//startswith
let str = 'Dhadkan meri dhadkan, dhadkan meri dhadkan .'

console.log(str.startsWith('Dhadkan meri'))          // true
console.log(str.startsWith('dhadkan'))      // false
console.log(str.startsWith('meri dhadkan', 30))  // true