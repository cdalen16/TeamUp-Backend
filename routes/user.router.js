var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');


router.post('/authenticate', userController.authenticate);
router.post('/register', userController.register);
router.post('/changepass', userController.changePass);
router.get('/allusers', authorize(Role.admin),userController.getAllUsers);
router.get('/getuser:username', userController.getByName);

module.exports = router;
// router.get('/getgoals:username', userController.getGoals);
// router.post('/setgoals', userController.setGoals);

