const router = require('express').Router();
const FirstTermMarketerController = require('../controller/first_term_marketer_controller');
router.post('/marketerdetails',FirstTermMarketerController.createMarketerdetails);
router.post('/getfirsttermmarketerdetails',FirstTermMarketerController.getFirstTermMarketerDetails);
router.post('/deleteFirstTermMarketer',FirstTermMarketerController.deleteFirstTermMarketingDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;