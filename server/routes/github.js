var Github = require('github'),
	utils = require('./_utils'),
	user = 'calebthebrewer';

var github = new Github({
	version: "3.0.0"
});

module.exports = function(app) {
	app.get(utils.base + 'github/repositories/:repo?', function(req, res) {
		if (utils.paramExists(req, 'repo')) {
			github.repos.get({
				user: user,
				repo: req.params.repo
			}, function(error, data) {
				res.send(error || data);
			});
		} else {
			github.repos.getFromUser({
				user: user
			}, function(error, data) {
				res.send(error || data);
			});
		}
	});

	app.get(utils.base + 'github/readme/:repo', function(req, res) {
		if (utils.paramExists(req, 'repo')) {
			github.repos.getReadme({
				user: user,
				repo: req.params.repo
			}, function(error, data) {
				if (data) {
					var content = data.content;
					if (data.encoding === 'base64') {
						content = new Buffer(content, 'base64');
					}
					res.send(content);
				} else {
					res.send(error);
				}
			});
		} else {
			res.status(404).send('No repository specified.');
		}
	});
};