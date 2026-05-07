const AppError = require('../utils/customError');

const progress = [];

exports.markLesson = (req, res, next) => {
  const { courseId } = req.params;
  const { lessonId } = req.body;

  if (!lessonId) return next(new AppError('Missing lessonId', 400));

  const record = progress.find(
    p => p.userId === req.user.id && p.courseId == courseId
  );

  if (!record) {
    progress.push({
      userId: req.user.id,
      courseId,
      lessons: [lessonId]
    });
  } else {
    if (record.lessons.includes(lessonId)) {
      return next(new AppError('Lesson already completed', 400));
    }
    record.lessons.push(lessonId);
  }

  res.json({ message: 'Lesson completed' });
};

exports.getProgress = (req, res) => {
  const data = progress.find(
    p => p.userId === req.user.id && p.courseId == req.params.courseId
  );

  res.json(data || { lessons: [] });
};