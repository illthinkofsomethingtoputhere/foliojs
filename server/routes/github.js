var Github = require('github'),
	utils = require('./_utils');

var github = new Github({
	version: "3.0.0"
});

module.exports = function(app) {
	app.get(utils.base + 'github/:repo?', function(req, res) {
		if (utils.paramExists(req, 'repo')) {
			github.repos.get({
				user: 'calebthebrewer',
				repo: req.params.repo
			}, function(error, data) {
				res.send(error || data);
			});
		} else {
			github.repos.getFromUser({
				user: 'calebthebrewer'
			}, function(error, data) {
				res.send(error || data);
			});
		}
	});
};