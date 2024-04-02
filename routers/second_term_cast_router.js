const router = require('express').Router();
const SecondTermCastController = require('../controller/second_term_cast_controller');
router.post('/secondtermcastdetails',SecondTermCastController.createCastdetails);
router.post('/getsecondtermcastdetails',SecondTermCastController.getCastDetails);
router.post('/deletesecondtermcast',SecondTermCastController.deleteCastDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;