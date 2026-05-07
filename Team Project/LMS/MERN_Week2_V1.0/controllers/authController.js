const jwt = require('jsonwebtoken');
const { users } = require('../data/users');
const AppError = require('../utils/customError');

exports.login = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError('Missing credentials', 400));
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) return next(new AppError('Invalid credentials', 401));

  const token = jwt.sign(
    { id: user.id, role: user.role },
    'secret',
    { expiresIn: '1h' }
  );

  // Cookie
  res.cookie('token', token, { httpOnly: true });

  // Session
  req.session.user = user;

  res.json({ token });
};