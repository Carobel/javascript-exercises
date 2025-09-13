const palindromes = function (str) {
    // lowercase, delete punctuation, split into an array of chars, get rid of spaces
    const arrOriginal = str
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .split('')
        .filter(char => char !== ' ');
    
    // reverse
    const arrReverse = arrOriginal.toReversed();

    // compare array equality
    return arrOriginal.length === arrReverse.length 
    && arrOriginal.every((value, index) => value === arrReverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
