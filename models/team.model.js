//THIS will be used once we connect MongoDB   console.log("UnauthorizedError req:",req.url);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//https://mongoosejs.com/docs/populate.html#populate_an_existing_mongoose_document


//TODO: notice that the goals are missing from this schema.
const schema = new Schema({
    class: { type: String, required: true},
    teamMembers: { type: Array, required: true, default: []},
    teamName: { type: String, unique: true, required: true },
    description: { type: String, required: true },
    teamSize: { type: Number, required: true, default: 1},
    teamCap: { type: Number, required: true, default: 3},
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    createdDate: { type: Date, default: Date.now },
});


schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('team', schema);


