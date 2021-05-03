const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
        username: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        role: {type:String, required: true},
        message: {type:String, required: true}
    }
);

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Chat', schema);
