const AppError = require('../utils/customError');

const enrollments = [];

exports.enroll = (req, res, next) => {
  const exists = enrollments.find(
    e => e.userId === req.user.id && e.courseId == req.params.courseId
  );

  if (exists) return next(new AppError('Already enrolled', 400));

  enrollments.push({ userId: req.user.id, courseId: req.params.courseId });

  res.status(201).json({ message: 'Enrolled' });
};

exports.getEnrollments = (req, res) => {
  const userEnrollments = enrollments.filter(e => e.userId === req.user.id);
  res.json(userEnrollments);
};

exports.withdraw = (req, res) => {
  const index = enrollments.findIndex(
    e => e.userId === req.user.id && e.courseId == req.params.courseId
  );

  if (index === -1) return res.status(404).json({ error: 'Not enrolled' });

  enrollments.splice(index, 1);

  res.json({ message: 'Withdrawn' });
};