const { expect } = require('chai');
const intNumber = require('../integerNumber')
const ERROR_MESSAGE = 'A number must be provided';

describe('Should return a string if a number is provided, telling what type of int this number is', () => {
  it('should throw an error if a number is not provided', () => {
    const result = intNumber('number')
    expect(() => result).to.throw(ERROR_MESSAGE);
  })

  it('should throw an error if a number is not provided', () => {
    const result = intNumber('0')
    expect(() => intNumber('0')).to.throw(ERROR_MESSAGE);
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => result).to.throw(ERROR_MESSAGE);
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => result).to.throw(ERROR_MESSAGE);
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => result).to.throw(ERROR_MESSAGE);
  })

  it('should return a string if a number is provided', () => {
    const result = intNumber(5)
    expect(result).to.be.a('string');
  })

  it('should return string "positive"', () => {
    const result = intNumber(5)
    expect(result).to.be.equal('positive');
  })

  it('should return string "negative"', () => {
    const result = intNumber(-5)
    expect(result).to.be.equal('negative');
  })

  it('should return string "neutral"', () => {
    const result = intNumber(0)
    expect(result).to.be.equal('neutral');
  })
})
