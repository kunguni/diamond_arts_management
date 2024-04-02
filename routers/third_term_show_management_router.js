const router = require('express').Router();
const ThirdTermShowsManagementController = require('../controller/third_term_show_management_controller');
router.post('/thirdtermperformedshowdetails',ThirdTermShowsManagementController.createPerformedShowdetails);
router.post('/getthirdtermperformedshowdetails',ThirdTermShowsManagementController.getPerformedShowDetails);
router.post('/deletethirdtermperformedshowdetails',ThirdTermShowsManagementController.deletePerformedShowDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;