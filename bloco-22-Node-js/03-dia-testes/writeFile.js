const fs = require('fs');

const writeFile = (fileName, text) => {
  const arguments = [fileName, text];
  const checkArgs = arguments.every((argument) => typeof(argument) === 'string');
  if (!checkArgs) throw new Error('Arguments must be strings');
};

module.exports = writeFile;
