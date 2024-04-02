const router = require('express').Router();
const ProductionController = require('../controller/production_controller');
router.post('/productiondetails',ProductionController.createPdetails);
router.post('/getproductiondetails',ProductionController.getProductionDetails);
module.exports = router;