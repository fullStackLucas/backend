const calculateNumbers = require('../asyncFlow');

describe('testing possible returns from Promises of CalculateNumbers function', () => {
  it('should return the response of the Promise', async () => {
    const result = await calculateNumbers(7, 8, 5);
    expect(result).toBe(75);
  })

  it('the function fails with an error when the result is smaller than expected', async () => {
    expect.assertions(1);
    try {
      await calculateNumbers(1, 3, 5);
    } catch (e) {
      expect(e).toMatch(/Valor muito baixo/i);
    }
  });

  it('the function fails with an error if any parameters are invalid', async () => {
    expect.assertions(1);
    try {
      await calculateNumbers('1', 3, 5);
    } catch (e) {
      expect(e).toMatch(/Informe apenas números/i);
    }
  });

  it('the function fails with an error if any parameters are invalid', async () => {
    expect.assertions(1);
    try {
      await calculateNumbers('1', 3, 5);
    } catch (e) {
      expect(e).toMatch(/Informe apenas números/i);
    }
  });
})
