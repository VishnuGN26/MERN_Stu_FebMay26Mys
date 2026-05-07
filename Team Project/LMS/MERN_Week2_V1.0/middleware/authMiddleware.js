const jwt = require('jsonwebtoken');
const AppError = require('../utils/customError');

module.exports = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization;

  if (!token) return next(new AppError('Unauthorized', 401));

  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch {
    next(new AppError('Invalid token', 401));
  }
};