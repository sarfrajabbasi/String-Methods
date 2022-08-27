const str = 'malaaitikka exit or not'

console.log(str.includes('exit '))        // true
console.log(str.includes('malaaitikk'))     // true
console.log(str.includes('nonexistent'))  // false
console.log(str.includes('To be', 1))     // false
console.log(str.includes('TO BE'))        // false
console.log(str.includes(''))             // true