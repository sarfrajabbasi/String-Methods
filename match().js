// const str = 'lost in Space chapter 5.2.3.4';
// const re = /Space (chapter \d+(\.\d)*)/i;
// const found = str.match(re);

// console.log(found);

 

// const str = '5sarfrajabbasiSARFRAJABBASI1245';
// const regexp = /[A-Z]/gi;
// const matches_array = str.match(regexp);

// console.log(matches_array);



// const paragraph = 'The creatures outside looked from pig to man, and from man to pig, and from pig to man again';

// const capturingRegex = /(?<animal> pig|cat) to man /;
// const found = paragraph.match(capturingRegex);
// console.log(found.groups); // {animal: "pig"}



// const str = "Nothing will come of nothing.";

// console.log(str.match());   // returns [""]



// const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.",
    
// str2 = "My grandfather is 65 years old and My grandmother is 63 years old.",
   
// str3 = "The contract was declared null and void.";
// console.log(str1.match("number"));   
// console.log(str1.match(NaN));       
// console.log(str1.match(Infinity));   
// console.log(str1.match(+Infinity)); 
// console.log(str1.match(-Infinity));  
// console.log(str2.match(65));       
// console.log(str2.match(+65));       
// console.log(str3.match(null)); 