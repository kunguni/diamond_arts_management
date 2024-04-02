const router = require('express').Router();
const SecondTermBookingController = require('../controller/second_term_booking_controller');
router.post('/secondtermbookingdetails',SecondTermBookingController.createBookingdetails);
router.post('/getsecondtermbookingdetails',SecondTermBookingController.getBookingDetails);
router.post('/deletesecondtermbooking',SecondTermBookingController.deleteBookingDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;