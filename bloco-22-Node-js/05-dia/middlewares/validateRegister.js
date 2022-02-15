function validateUsername (req, res, next) {
  const { username } = req.body;
  if (username.lenght <= 3) return res.status(400).json({ message: 'invalid data' });

  next();
}

function validateRegister(req, res, next) {
  const { email, password } = req.body;
  
  if (!email.includes('@') || !email.includes('.')) return res.status(400).json({ message: 'invalid data'});
  if (typeof(password) !== 'number'
    || (password.length < 4 || password.length > 8)) return res.status(400).json({ message: 'invalid data' });

  next();
}

module.exports = { validateRegister, validateUsername };