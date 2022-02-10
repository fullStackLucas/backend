const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const writeFile = require('../writeFile');

describe.only('Function that should write something into a file', () => {
  const PATH = '../writeFile';
  const MESSAGE = 'hello world';
  beforeEach(() => {
    sinon.stub(fs, 'writeFileSync').returns('ok');
  })

  afterEach(() => {
    fs.writeFileSync.restore();
  })

  it('should be a function', () => {
    expect(writeFile).to.be.a('function');
  })

  it('should throw an error if arguments are not strings', () => {
    expect(() => writeFile()).to.throw('Arguments must be strings');
  })

  it('should return an "ok" message if everything is fine', () => {
    const result = writeFile(PATH, MESSAGE);
    expect(result).to.be.equal('ok');
  })
})
