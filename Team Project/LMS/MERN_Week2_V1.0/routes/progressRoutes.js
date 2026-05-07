const express = require('express');
const router = express.Router();

const {
  markLesson,
  getProgress
} = require('../controllers/progressController');

const auth = require('../middleware/authMiddleware');

router.post('/:courseId/lesson', auth, markLesson);
router.get('/:courseId', auth, getProgress);

module.exports = router;