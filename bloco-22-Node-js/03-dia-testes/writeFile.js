const fs = require('fs');

const writeFile = (filePath, text) => {
  const arguments = [filePath, text];
  const checkArgs = arguments.every((argument) => typeof(argument) === 'string');
  if (!checkArgs) throw new Error('Arguments must be strings');

  try {
    fs.writeFileSync(filePath, text);
    return 'ok';
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = writeFile;
