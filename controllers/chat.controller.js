const chatService = require('../services/chat.service')


module.exports = {
    sendChat,
    getAllChats
};


function sendChat(req, res, next) {
    console.log("Chat Sent: ", req.body);
    chatService.sendMessage(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAllChats(req, res, next) {
    chatService.getChats()
        .then(chats => res.json(chats))
        .catch(err => next(err));
}

