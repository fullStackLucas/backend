const { expect } = require('chai');

const { sum, subtract, multiply, division } = require('../calc');

describe('Testing function sum', () => {
  it('should return an error when one or more arguments are not numbers', () => {
    expect(() => sum('1', 3)).to.throws();
  })
  
  it('should return the correct sum between 1 and 3', () => {
    expect(sum(1, 3)).to.equal(4);
  })

  it('should return the correct sum between 1 and -3', () => {
    expect(sum(1, -3)).to.equal(-2);
  })

  it('should return the correct sum between 1 and 0', () => {
    expect(sum(1, 0)).to.equal(1);
  })
})

describe('Testing function subtratct', () => {
  it('should return an error when one or more arguments are not numbers', () => {
    expect(() => subtract('hello', 'world')).to.throws();
  })
  
  it('should return the correct subtract between 1 and 3', () => {
    expect(subtract(1, 3)).to.equal(-2);
  })

  it('should return the correct subtract between 1 and -3', () => {
    expect(subtract(1, -3)).to.equal(4);
  })

  it('should return the correct subtract between 0 and 1', () => {
    expect(subtract(0, 1)).to.equal(-1);
  })
})

describe('Testing function multiply', () => {
  it('should return an error when one or more arguments are not numbers', () => {
    expect(() => multiply('not', 'number')).to.throws();
  })
  
  it('should return the correct multiply between 4 and 2', () => {
    expect(multiply(4, 2)).to.equal(8);
  })

  it('should return the correct multiply between 5 and -3', () => {
    expect(multiply(5, -3)).to.equal(-15);
  })

  it('should return the correct multiply between 0 and 1', () => {
    expect(multiply(0, 1)).to.equal(0);
  })
})

describe('Testing function division', () => {
  it('should return an error when one or more arguments are not numbers', () => {
    expect(() => division()).to.throws();
  })

  it('should return an error when second argument is equal to zero', () => {
    expect(() => division(5, 0)).to.throws();
  })
  
  it('should return the correct division between 50 and 5', () => {
    expect(division(50, 5)).to.equal(10);
  })

  it('should return the correct division between 5 and 5', () => {
    expect(division(5, 2)).to.equal(2.5);
  })

  it('should return the correct division between 8 and 4', () => {
    expect(division(8, 4)).to.equal(2);
  })
})