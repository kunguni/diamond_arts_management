const TeacherRegController = require('../controller/teacher_reg_controller');
const router = require('express').Router();
router.post('/teacherregistration', TeacherRegController.register);
router.post('/teacherlogin',TeacherRegController.login);
module.exports = router;