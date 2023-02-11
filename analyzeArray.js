function analyzeArray(array) {
  let sum = 0;
  array.forEach(function (num) {
    sum += num;
  });
  let average = sum / array.length;

  return {
    average: average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));

module.exports = analyzeArray;
