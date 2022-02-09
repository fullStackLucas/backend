const readline = require('readline-sync');

const calcImc = (weight=80, height=1.82) => {
  if (weight <= 0 || height <= 0) {
    throw new Error('One or more parameters are above zero');
  }
  try {
    const result = weight / (height * height);
    return Number(result.toFixed(2));
  } catch (e) {
    console.log(e.message)
  }
};

const imcClassifier = (imcResult) => {
  if (!imcResult) {
    throw new Error('Parameters must be provided');
  }
  let response;
  if(Number(imcResult) <= 18.5) response = 'Abaixo do peso (magreza)';
  if(Number(imcResult) > 18.5 && Number(imcResult) <= 24.9) response = 'Peso normal';
  if(Number(imcResult) > 25 && Number(imcResult) <= 29.9) response = 'Acima do peso (sobrepeso)';
  if(Number(imcResult) > 30 && Number(imcResult) <= 34.9) response = 'Obesidade grau I'
  if(Number(imcResult) > 35 && Number(imcResult) <= 39.9) response = 'Obesidade grau II';
  if(Number(imcResult) > 40) response = 'Obesidade graus III e IV';
  return response;
}

module.exports = { calcImc, imcClassifier };