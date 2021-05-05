var express = require('express');
var router = express.Router();
const teamController = require('../controllers/team.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');


router.post('/addteam', teamController.addTeam);
router.get('/allteams', teamController.getAllTeams);
router.delete('/:date', teamController.deleteTeam);
router.post('/editteam', teamController.editTeam);
router.post('/join', teamController.join);


module.exports = router;
