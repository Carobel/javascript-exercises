const fibonacci = function(n) {
    let arr = [1, 1];
    if (isNaN(n) || n < 0) {
        return "OOPS";
    } else if (n == 0) {
        return 0;
    } else if (n > 1) {
        for (let i = 2; i < n; i++) {
            arr.push(arr[0] + arr[1]);
            arr.shift();
        }
    }
    return arr[1];
};

// Do not edit below this line
module.exports = fibonacci;
