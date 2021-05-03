const config = require('../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../_helpers/database');
const Chat = db.Chat;



module.exports = {
    getChats,
    sendMessage
}

async function sendMessage(chatParam) {

    // console.log(userParam.avatarcolor);
    const chat = new Chat(chatParam);
    // save user
    await chat.save();
}

async function getChats() {
    //Returning the result of the promise.
    return await Chat.find().select('-hash');
}
