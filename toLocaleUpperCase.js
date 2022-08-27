let str1 = 'alphabet';
let str2 = 'Gesäß'
let str3 ='i\u0307'

console.log(str1.toLocaleUpperCase()); // 'ALPHABET'

console.log(str2.toLocaleUpperCase()); // 'GESÄSS'

console.log(str3.toLocaleUpperCase('lt-LT')); // 'I'

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
console.log(str3.toLocaleUpperCase(locales)); // 'I'
