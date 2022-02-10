const sum = (valueA, valueB) => {
  const values = [valueA, valueB];
  const numberVerification = values.every((value) => typeof(value) === 'number');
  if(!numberVerification) throw new Error('One or more arguments are not numbers');
  try {
    return valueA + valueB;
  } catch (error) {
    console.log(error.message);
  }
};

const subtract = (valueA, valueB) => {
  const values = [valueA, valueB];
  const numberVerification = values.every((value) => typeof(value) === 'number');
  if(!numberVerification) throw new Error('One or more arguments are not numbers');
  try {
    return valueA - valueB;
  } catch (error) {
    console.log(error.message);
  }
};

const multiply = (valueA, valueB) => {
  const values = [valueA, valueB];
  const numberVerification = values.every((value) => typeof(value) === 'number');
  if(!numberVerification) throw new Error('One or more arguments are not numbers');
  try {
    return valueA * valueB;
  } catch (error) {
    console.log(error.message);
  }
};

const division = (valueA, valueB) => {
  const values = [valueA, valueB];
  const numberVerification = values.every((value) => typeof(value) === 'number');
  if(!numberVerification) throw new Error('One or more arguments are not numbers');
  if(!valueB) throw new Error('Does not exist division by zero');
  try {
    return valueA / valueB;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { sum, subtract, multiply, division };
