const calculateNumbers = async (num1, num2, num3) => {
  const promise = await new Promise((resolve, reject) => {
    const newArray = [num1, num2, num3];
    const areArgumentsValid = newArray.every((number) => typeof(number) === 'number');
    const calculateArguments = (num1 + num2) * num3;
    if(!areArgumentsValid) reject('Informe apenas números');
    if(calculateArguments < 50) reject('Valor muito baixo');
    try {
      resolve(calculateArguments);
    } catch (error) {
      console.log(error.message);
    } 
  })
  return promise;
};

calculateNumbers(2, 4, 5)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

module.exports = calculateNumbers;
