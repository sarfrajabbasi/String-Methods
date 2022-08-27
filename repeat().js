var b = ' Dhadkan meri dhadkan, dhadkan meri dhadkan ';

console.log("Dhadkan, Dhadkan, Dhadkan, Dhadkan," + b.repeat(1) + "dhadkan, dhadkan, dhadkan, dhadkan, Dhadkan Dhadkan dhadkan Dhadkan Dhadkan," + b.repeat(1) )    // RangeError
console.log("Dhadkan, Dhadkan, Dhadkan, Dhadkan," + b.repeat(0) +  "dhadkan, dhadkan, dhadkan, dhadkan, Dhadkan Dhadkan dhadkan Dhadkan Dhadkan," + b.repeat(0))     // ''
console.log("Dhadkan, Dhadkan, Dhadkan, Dhadkan," + b.repeat(1) +  "dhadkan, dhadkan, dhadkan, dhadkan, Dhadkan Dhadkan dhadkan Dhadkan Dhadkan," + b.repeat(1))     // 'abc'
console.log("Dhadkan, Dhadkan, Dhadkan, Dhadkan," + b.repeat(2) + "dhadkan, dhadkan, dhadkan, dhadkan, Dhadkan Dhadkan dhadkan Dhadkan Dhadkan," + b.repeat(2) )     // 'abcabc'
console.log("Dhadkan, Dhadkan, Dhadkan, Dhadkan," + b.repeat(3.5) +  "dhadkan, dhadkan, dhadkan, dhadkan, Dhadkan Dhadkan dhadkan Dhadkan Dhadkan," + b.repeat(3.5))   // 'abcabcabc' (count will be converted to integer)
console.log("Dhadkan, Dhadkan, Dhadkan, Dhadkan," + b.repeat(1/0) +  "dhadkan, dhadkan, dhadkan, dhadkan, Dhadkan Dhadkan dhadkan Dhadkan Dhadkan," + b.repeat(1/0))   // RangeError

({ toString: () => ' Dhadkan meri dhadkan, dhadkan meri dhadkan ', repeat: String.prototype.repeat }).repeat(2)
// 'abcabc' (repeat() is a generic method)
