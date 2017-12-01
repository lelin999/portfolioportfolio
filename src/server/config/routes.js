// require all controllers:
var projects = require('../controllers/projects');
var users = require('../controllers/users');

module.exports = function(app){
    // READ ALL
    app.get('/projects/all', function(req, res) {
        projects.allProjects(req, res);
    })

    app.get('/users', function(req, res) {
        users.allUsers(req, res);
    })

    app.get('/users/:id', function(req, res) {
        users.userAllProjects(req, res);
    })
}