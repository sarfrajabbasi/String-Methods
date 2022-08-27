// const regexp = new RegExp(`Foo[a-z]*`,'g');
// const str = 'table Football, Foosball';
// let match;
// while((match = regexp.exec(str)) !==null){

//   console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}.`)
  
// }

// const regexp = new RegExp(`Foo[a-z]*`,'g');
// const str = 'table Football, Foosball';
// const matches = str.matchAll(regexp);
// for(const match of matches){
//   console.log(`Found ${match[0]} starts=${match.index} end=${match.index  + match[0].length}.`);
// }
// Array.from(str.matchAll(regexp), m => m[0]);

// const regexp = new RegExp('[a-s]','g');
// regexp.lastIndex = 2;
// const str = 'abcdfhs';
// console.log(Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`));
// // Array [ "1 b", "1 c" ]

// let regexp = /t(e)(st(\d?))/g;
// let str = 'test1test2';

// console.log(str.match(regexp));

// let array = [...str.matchAll(regexp)];

// console.log(array[0]);

// console.log(array[1]);


