const { expect } = require('chai');
const intNumber = require('../integerNumber')

describe.only('Should return a string if a number is provided, telling what type of int this number is', () => {
  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('hello').to.throw(new Error('A number must be provided')));
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('0').to.throw(new Error('A number must be provided')));
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('1').to.throw(new Error('A number must be provided')));
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber('-1').to.throw(new Error('A number must be provided')));
  })

  it('should throw an error if a number is not provided', () => {
    expect(() => intNumber().to.throw(new Error('A number must be provided')));
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
