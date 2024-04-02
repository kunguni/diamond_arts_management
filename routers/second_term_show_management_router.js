const router = require('express').Router();
const SecondTermShowsManagementController = require('../controller/second_term_show_management_controller');
router.post('/secondtermperformedshowdetails',SecondTermShowsManagementController.createPerformedShowdetails);
router.post('/getsecondtermperformedshowdetails',SecondTermShowsManagementController.getPerformedShowDetails);
router.post('/deletesecondtermperformedshowdetails',SecondTermShowsManagementController.deletePerformedShowDetails);
//router.post('/getProductionDetails',ProductionController.getProductionDetails);
module.exports = router;