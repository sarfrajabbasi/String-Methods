console.log('alphabet'.toUpperCase()); // 'ALPHABET'

//Conversion of non-string this values to strings

const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
