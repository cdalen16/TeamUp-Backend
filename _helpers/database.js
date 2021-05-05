const config = require('../config.json');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useCreateIndex: true, useNewUrlParser: true });
//mongoose.Promise = global.Promise;

module.exports = {
    User: require('../models/user.model'),
    Chat: require('../models/chat.model'),
    Team: require('../models/team.model')
    // Rank: require('../models/ranks.model')
};
