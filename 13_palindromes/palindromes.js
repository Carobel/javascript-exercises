const palindromes = function (str) {
    const arrOriginal = str.split('');
    const arrReverse = str.split('').reverse();
    
    // compare arrays
    return arrOriginal.length === arrReverse.length 
    && arrOriginal.every((value, index) => value === arrReverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
