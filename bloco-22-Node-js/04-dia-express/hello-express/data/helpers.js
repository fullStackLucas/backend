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

module.exports = { ascendingSort, validateName };
