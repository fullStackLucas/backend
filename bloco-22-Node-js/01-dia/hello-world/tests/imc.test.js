const { calcImc, imcClassifier } = require('../imc');

describe('Testing the correct void from calcImc function', () => {
  it('receiving no values', () => {
    expect(calcImc()).toBe(24.15);
  })

  it('receiving only weight values', () => {
    expect(calcImc(70)).toBe(21.13)
  })

  it('receiving both weight and height values', () => {
    expect(calcImc(70, 1.70)).toBe(24.22)
  })

  it('receiving weight equal to zero', () => {
    expect(() => (calcImc(0, 0))).toThrow();
  })

  it('receiving both weight and height equal to zero', () => {
    expect(() => (calcImc(0, 0))).toThrow();
  })

  it('receiving height equal to zero', () => {
    expect(() => (calcImc(80, 0))).toThrow();
  })
})

describe('Testing the correct void from imcClassifier function', () => {
  it('receiving no values', () => {
    expect(() => (imcClassifier())).toThrow();
  })

  const calcImc = jest.fn()
    .mockReturnValueOnce(18)
    .mockReturnValueOnce(22)
    .mockReturnValueOnce(27)
    .mockReturnValueOnce(32)
    .mockReturnValueOnce(37)
    .mockReturnValueOnce(43);

  it('receiving value smaller then 18.5', () => {
    expect(imcClassifier(calcImc())).toMatch(/Abaixo do peso/i);
  })

  it('receiving value between 18.5 and 24.9', () => {
    expect(imcClassifier(calcImc())).toMatch(/Peso normal/i);
  })

  it('receiving value between 25 and 29.9', () => {
    expect(imcClassifier(calcImc())).toMatch(/Acima do peso/i);
  })

  it('receiving value between 30 and 34.9', () => {
    expect(imcClassifier(calcImc())).toMatch(/Obesidade grau I/i);
  })

  it('receiving value between 35 and 39.9', () => {
    expect(imcClassifier(calcImc())).toMatch(/Obesidade grau II/i);
  })

  it('receiving value bigger then 40', () => {
    expect(imcClassifier(calcImc())).toMatch(/Obesidade graus III e IV/i);
  })
})