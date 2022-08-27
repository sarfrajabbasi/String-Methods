// let string1 = '\u00F1';
// let string2 = '\u006E\u0303';

// console.log(string1);  //  ñ
// console.log(string2);  //  ñ

// let string1 = '\u00F1';            // ñ
// let string2 = '\u006E\u0303';      // ñ

// console.log(string1 === string2); // false
// console.log(string1.length);      // 1
// console.log(string2.length);      // 2



// let string1 = '\u00F1';           // ñ
// let string2 = '\u006E\u0303';     // ñ

// string1 = string1.normalize('NFD');
// string2 = string2.normalize('NFD');

// console.log(string1 === string2); // true
// console.log(string1.length);      // 2
// console.log(string2.length);      // 2



// let string1 = '\u00F1';                           // ñ
// let string2 = '\u006E\u0303';                     // ñ

// string1 = string1.normalize('NFC');
// string2 = string2.normalize('NFC');

// console.log(string1 === string2);                 // true
// console.log(string1.length);                      // 1
// console.log(string2.length);                      // 1
// console.log(string2.codePointAt(0).toString(16)); // f1

// let string1 = '\uFB00';
// let string2 = '\u0066\u0066';

// console.log(string1);             // ﬀ
// console.log(string2);             // ff
// console.log(string1 === string2); // false
// console.log(string1.length);      // 1
// console.log(string2.length);      // 2

// string1 = string1.normalize('NFKD');
// string2 = string2.normalize('NFKD');

// console.log(string1);             // ff <- visual appearance changed
// console.log(string2);             // ff
// console.log(string1 === string2); // true
// console.log(string1.length);      // 2
// console.log(string2.length);      // 2





// Initial string

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
let str = '\u1E9B\u0323';

// Canonically-composed form (NFC)

// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE
// U+0323: COMBINING DOT BELOW
console.log(str.normalize('NFC')); // '\u1E9B\u0323'
console.log(str.normalize());      // same as above

// Canonically-decomposed form (NFD)

// U+017F: LATIN SMALL LETTER LONG S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
console.log(str.normalize('NFD')); // '\u017F\u0323\u0307'

// Compatibly-composed (NFKC)

// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE
console.log(str.normalize('NFKC')); // '\u1E69'

// Compatibly-decomposed (NFKD)

// U+0073: LATIN SMALL LETTER S
// U+0323: COMBINING DOT BELOW
// U+0307: COMBINING DOT ABOVE
console.log(str.normalize('NFKD')); // '\u0073\u0323\u0307'