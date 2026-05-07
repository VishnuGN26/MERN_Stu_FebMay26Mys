const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const logger = require('./middleware/loggerMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const courseRoutes = require('./routes/courseRoutes');
const enrollRoutes = require('./routes/enrollRoutes');
const progressRoutes = require('./routes/progressRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Built-in middleware
app.use(express.json());
app.use(cookieParser());

// Session setup
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Custom middleware
app.use(logger);

// Routes
app.use('/courses', courseRoutes);
app.use('/enroll', enrollRoutes);
app.use('/progress', progressRoutes);
app.use('/auth', authRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;