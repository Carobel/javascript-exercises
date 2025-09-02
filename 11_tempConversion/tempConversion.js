const convertToCelsius = function(degrees) {
  celsius = (degrees-32) * (5/9);
  return Math.round(celsius*10)/10;
};

const convertToFahrenheit = function(degrees) {
  fahrenheid = degrees * (9/5) + 32;
  return Math.round(fahrenheid*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
