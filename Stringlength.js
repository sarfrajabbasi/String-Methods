let x = 'sarfraj abbsi ';
let empty = '';

console.log(x + ' is ' + x.length + ' code units long');

console.log('The empty string has a length of ' + empty.length);




let myString = "bluebells";

// Attempting to assign a value to a string's .length property has no observable effect.
myString.length = 4;
console.log(myString);
// expected output: "bluebells"
console.log(myString.length);
// expected output: 9


let x1 = "hello world "
let  v = " is sarfraj here "

console.log(x1 + ' length is ' + v.length);