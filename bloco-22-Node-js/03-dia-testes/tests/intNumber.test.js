const { expect } = require('chai');
const intNumber = require('../integerNumber')

describe.only('Should return a string if a number is provided, telling what type of int this number is', () => {
  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('number')).to.throw(/A number must be provided/i);
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('0')).to.throw(/A number must be provided/i);
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('-1')).to.throw(/A number must be provided/i);
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('1')).to.throw(/A number must be provided/i);
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber()).to.throw(/A number must be provided/i);
  })

  it('should return a string if a number is provided', () => {
    expect(intNumber(5)).to.be.a('string');
  })

  it('should return string "positive"', () => {
    expect(intNumber(5)).to.equal('positive');
  })

  it('should return string "negative"', () => {
    expect(intNumber(-5)).to.equal('negative');
  })

  it('should return string "neutral"', () => {
    expect(intNumber(0)).to.be.equal('neutral');
  })
})
