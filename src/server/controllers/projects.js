// require mongoose:
var mongoose = require('mongoose');
// get mongoose model for projects:
var Project = mongoose.model('Project');

module.exports = {
  allProjects: function(req, res){
    Project.find({}, function(err, projects){
      if(err){
        res.json(err);
      } else {
        res.json(projects);
      }
    });
  },

}
