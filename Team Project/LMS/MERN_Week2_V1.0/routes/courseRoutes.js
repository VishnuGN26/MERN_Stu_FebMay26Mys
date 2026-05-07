const express = require('express');
const router = express.Router();

const {
  getCourses,
  getCourseById,
  createCourse
} = require('../controllers/courseController');

const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');

router.get('/', getCourses);
router.get('/:id', getCourseById);

// Admin only
router.post('/', auth, role('admin'), createCourse);

module.exports = router;