
var str = "sarfraj\uD835\uDC68";

var strIter = str[Symbol.iterator]();
var chartr = strIter.next()
console.log(chartr.value); // "sarfraj"
// console.log(chartr.value); // "\uD835\uDC68"

var str = "string";
for(var v of str){
  console.log( typeof v + " :- " + v)
}
