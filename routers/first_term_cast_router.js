const router = require('express').Router();
const FirstTermCastController = require('../controller/first_term_cast_controller');
router.post('/firsttermcastdetails',FirstTermCastController.createCastdetails);
router.post('/getfirsttermcastdetails',FirstTermCastController.getCastDetails);
router.post('/updatefirsttermcastdetails', FirstTermCastController.updateCastDetails);
router.post('/restorefirsttermcastdetails', FirstTermCastController.restoreCastDetails);
router.post('/deletefirsttermcast',FirstTermCastController.deleteCastDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;