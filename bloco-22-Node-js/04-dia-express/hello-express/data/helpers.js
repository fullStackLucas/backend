function ascendingSort(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name || name === '') return res.status(400).json({ error: 'Invalid data' });

  next();
}

function validatePrice(req, res, next) {
  const { price } = req.body;

  if (!price || Number(price) < 0) return res.status(400).json({error: 'Invalid data'});

  next();
}

module.exports = { ascendingSort, validateName, validatePrice };
