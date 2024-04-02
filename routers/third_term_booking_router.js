const router = require('express').Router();
const ThirdTermBookingController = require('../controller/third_term_booking_controller');
router.post('/thirdtermbookingdetails',ThirdTermBookingController.createBookingdetails);
router.post('/getthirdtermbookingdetails',ThirdTermBookingController.getBookingDetails);
router.post('/deletethirdtermbooking',ThirdTermBookingController.deleteBookingDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;