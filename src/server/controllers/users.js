// require mongoose:
var mongoose = require('mongoose');
// get user mongoose model:
var User = mongoose.model('User');

module.exports = {
  allUsers: function(req, res){
    User.find({})
    .populate('projects')
    .exec(function(err, users) {
      if(err) {
        res.json(err);
      } else {
        res.json(users);
      }
    })
  },

  userAllProjects: function(req, res){
    User.findOne({_id: req.params.id})
    .populate('projects')
    .exec(function(err, user){
      if (err) {
        res.json(err);
      } else {
        res.json(user);
      }
    });
  }
}