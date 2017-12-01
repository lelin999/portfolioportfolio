// require mongoose:
var mongoose = require('mongoose');
// create mongoose schema for projects:
var ProjectSchema = new mongoose.Schema({
    // image: { data: Buffer, contentType: String },
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    userName: { type: String },
    name: { type: String, required: true },
    description: { type: String },
    github: { type: String } 
}, { timestamps: true });
// use mongoose schema to set new mongoose model:
mongoose.model('Project', ProjectSchema);