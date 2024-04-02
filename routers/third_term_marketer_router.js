const router = require('express').Router();
const ThirdTermMarketerController = require('../controller/third_term_marketer_controller');
router.post('/thirdTermMarketerdetails',ThirdTermMarketerController.createMarketerdetails);
router.post('/getThirdTermMarketerdetails',ThirdTermMarketerController.getThirdTermMarketerDetails);
router.post('/deleteThirdTermMarketer',ThirdTermMarketerController.deleteThirdTermMarketingDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;