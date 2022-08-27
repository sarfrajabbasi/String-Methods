let str = 'SARFRAJ'
let str2 ='\u0130'

console.log(str.toLocaleLowerCase()); // 'alphabet'

console.log(str2.toLocaleLowerCase('tr') === 'i');    // true
console.log(str2.toLocaleLowerCase('en-US') === 'i'); // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
console.log(str2.toLocaleLowerCase(locales) === 'i'); // true
