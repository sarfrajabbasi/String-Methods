var a ='abc'

// console.log(a.padEnd(10));          // "abc       "
// console.log(a.padEnd(10, "foo"));   // "abcfoofoof"
// console.log(a.padEnd(100, "123456")); // "abc123"
// console.log(a.padEnd(1));           // "abc"

// console.log(a.padStart(10));         // "       abc"
// console.log(a.padStart(10, "Sarfraj"));  // "foofoofabc"
// console.log(a.padStart(7,"@#$")); // "123abc"
// console.log(a.padStart(8, "*"));     // "00000abc"
// console.log(a.padStart(8,"YO-YO "));          // "abc"



// Javascript version of: (unsigned)
//  printf "%0*d" width num


function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, "*('_')");
}

const num = "sarfrj123";
console.log(leftFillNum(num, 21));