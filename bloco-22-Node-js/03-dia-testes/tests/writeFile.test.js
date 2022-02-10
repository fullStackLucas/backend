const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const writeFile = require('../writeFile');

describe.only('Function that should write something into a file', () => {
  it('should be a function', () => {
    expect(writeFile).to.be.a('function');
  })

  it('should throw an error if argumnets are not strings', () => {
    expect(() => writeFile()).to.throw('Arguments must be strings');
  })
})
