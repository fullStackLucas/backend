const readline = require('readline-sync');
const {calcImc , imcClassifier} = require('./imc');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');
const weight = readline.questionInt('Qual seu peso? ');
const height = readline.questionFloat('Qual sua altura? ');

console.log(`Hello ${name}! You are ${age} years old! and based on your weight: ${weight} and height: ${height}, your IMC is: ${calcImc(weight, height)}`);


