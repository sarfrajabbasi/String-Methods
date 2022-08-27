// let str = 'End of The Fucking World';
// let newstr = str.replace("Fucking", 'beautiful');
// console.log(newstr);  // Twas the night before Christmas...

let re = /(\w+)\s(\w+)/;
let str = 'John Smith';
let newstr = str.replace(re, '$2, $1');
console.log(newstr);  // Smith, John