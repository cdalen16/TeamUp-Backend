const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const schema = new Schema({
        username: { type: String, unique: true, required: true },
        email: { type: String, unique: true, required: true },
        hash: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        role: {type:String, required: true},
        createdDate: { type: Date, default: Date.now },
        caloriegoal: { type: Number, required: true, default: 2000 },
        minutegoal: { type: Number, required: true, default: 65 },
        avatarcolor: { type: String, required: true, default: "012157" }
    }
);

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
