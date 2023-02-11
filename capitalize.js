function capitalize(str) {
  let temp = str.slice(1, str.length);
  return str[0].toUpperCase() + temp;
}

module.exports = capitalize;
