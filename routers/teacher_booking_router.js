const router = require('express').Router();
const TeacherBookingController = require ('../controller/teacher_booking_controller');
router.post('/storeteacherbookingdetails',TeacherBookingController.createTeacherBooking);
router.post('/getTeacherBookingDetails',TeacherBookingController.getTeacherBooking);
module.exports = router;