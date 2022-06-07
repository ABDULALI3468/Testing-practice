const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error("string is empty or too long");
  }
  return string.length;
};

module.exports = stringLength;
