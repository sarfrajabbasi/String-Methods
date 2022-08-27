const a = 'sarfraj';
const b = 'SARFRAJ';

console.log(a.localeCompare(b))
console.log(a.localeCompare(b,"en",{sensitivity:"base"}))


// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0