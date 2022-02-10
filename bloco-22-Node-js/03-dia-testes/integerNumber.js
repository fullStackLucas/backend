const intNumber = (number) => {
  if(typeof number !== 'number') throw new Error('A number must be provided');
  if(number > 0) return 'positive';
  if(number < 0) return 'negative';
  if(number === 0) return 'neutral';
}

module.exports = intNumber;
