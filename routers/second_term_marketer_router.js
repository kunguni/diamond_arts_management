const router = require('express').Router();
const SecondTermMarketerController = require('../controller/second_term_marketer_controller');
router.post('/secondTermMarketerdetails',SecondTermMarketerController.createMarketerdetails);
router.post('/getSecondTermMarketerdetails',SecondTermMarketerController.getSecondTermMarketerDetails);
router.post('/deleteSecondTermMarketer',SecondTermMarketerController.deleteSecondTermMarketingDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;