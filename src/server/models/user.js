// require mongoose:
var mongoose = require('mongoose');
// create a mongoose schema object:
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
}, { timestamps: true });
// set mongoose User model using User schema:
mongoose.model('User', UserSchema);
