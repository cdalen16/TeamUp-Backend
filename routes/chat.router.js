var express = require('express');
var router = express.Router();
const chatController = require('../controllers/chat.controller');
const Role = require('../_helpers/role');
const authorize = require('../_helpers/authorize');


router.post('/sendChat', chatController.sendChat);
router.get('/allchats', chatController.getAllChats);


module.exports = router;
