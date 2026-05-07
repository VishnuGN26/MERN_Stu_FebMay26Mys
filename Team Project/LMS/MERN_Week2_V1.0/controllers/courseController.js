const { courses } = require('../data/courses');
const AppError = require('../utils/customError');

exports.getCourses = (req, res) => {
  const { category, difficulty } = req.query;

  let filtered = courses;

  if (category) filtered = filtered.filter(c => c.category === category);
  if (difficulty) filtered = filtered.filter(c => c.difficulty === difficulty);

  res.json(filtered);
};

exports.getCourseById = (req, res, next) => {
  const course = courses.find(c => c.id == req.params.id);

  if (!course) return next(new AppError('Invalid course ID', 404));

  res.json(course);
};

exports.createCourse = (req, res) => {
  const newCourse = { id: Date.now(), ...req.body };
  courses.push(newCourse);
  res.status(201).json(newCourse);
};