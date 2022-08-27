//Aliasing
console.log(String.prototype.trimLeft.name === "trimStart");

var str = '   foo  ';

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str);        // 'foo  '

