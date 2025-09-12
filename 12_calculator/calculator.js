const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, nr) => sum += nr, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, nr) => prod *= nr);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(num) {
	let prod = 1;
  for (let n = num; n > 0; n--) {
    prod *= n;
  }
  return prod;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
