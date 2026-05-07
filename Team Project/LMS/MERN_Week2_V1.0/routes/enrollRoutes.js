const express = require('express');
const router = express.Router();

const {
  enroll,
  getEnrollments,
  withdraw
} = require('../controllers/enrollController');

const auth = require('../middleware/authMiddleware');

router.post('/:courseId', auth, enroll);
router.get('/users/enrollments', auth, getEnrollments);
router.delete('/:courseId', auth, withdraw);

module.exports = router;