const router = require('express').Router();
const FirstTermShowsManagementController = require('../controller/first_term_show_management_controller');
router.post('/firsttermperformedshowdetails',FirstTermShowsManagementController.createPerformedShowdetails);
router.post('/getfirsttermperformedshowdetails',FirstTermShowsManagementController.getPerformedShowDetails);
router.post('/deletefirsttermperformedshowdetails',FirstTermShowsManagementController.deletePerformedShowDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;