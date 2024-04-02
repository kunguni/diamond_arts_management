const router = require('express').Router();
const ThirdTermCastController = require('../controller/third_term_cast_controller');
router.post('/thirdtermcastdetails',ThirdTermCastController.createCastdetails);
router.post('/getthirdtermcastdetails',ThirdTermCastController.getCastDetails);
router.post('/deletethirdtermcast',ThirdTermCastController.deleteCastDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;