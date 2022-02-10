const { sum, subtract, multiply, division } = require("./calc");
const SUM = 'SUM';
const SUB = 'SUBTRACT';
const MULTIPLY = 'MULTIPLY';
const DIVISION = 'DIVISION';
const calculator = (valueA, valueB, operator) => {
  switch(operator) {
    case SUM:
      sum(valueA, valueB);
      break;
    case SUB:
      subtract(valueA, valueB);
      break;
    case MULTIPLY:
      multiply(valueA, valueB);
      break;
    case DIVISION:
      division(valueA, valueB);
      break;
    default:
      break;
  }
};

module.exports = calculator;
