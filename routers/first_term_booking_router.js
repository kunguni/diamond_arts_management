const router = require('express').Router();
const FirstTermBookingController = require('../controller/first_term_booking_controller');
router.post('/firsttermbookingdetails',FirstTermBookingController.createBookingdetails);
router.post('/getfirsttermbookingdetails',FirstTermBookingController.getBookingDetails);
router.post('/deletefirsttermbooking',FirstTermBookingController.deleteBookingDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;