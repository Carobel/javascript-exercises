const removeFromArray = function(array, ...elements) {
    for (const element of elements) {
        let index = array.indexOf(element);
        while (index !== -1) {
            array.splice(index, 1);
            index = array.indexOf(element);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
