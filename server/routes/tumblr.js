var tumblr = require('tumblr'),
	utils = require('./_utils'),
	user = 'calebthebrewer';

var oauth = {
	consumer_key: '2eh17PddpprL9qLgnGKWj1Bts4VEGmv2TR8AaGIZJJRnrgXHPL',
	consumer_secret: 'YqztKKxwIN9bhAd3IYZzav4CgTPbsTsGrfqbIOLeiQ9UEmRb98'//,
//	token: 'OAuth Access Token',
//	token_secret: 'OAuth Access Token Secret'
};

var blog = new tumblr.Blog('surisburnbook.tumblr.com', oauth);

module.exports = function(app) {
	app.get(utils.base + 'tumblr/blog', function(req, res) {
		blog.text({limit: 2}, function(error, response) {
			if (error) {
				throw new Error(error);
			}

			res.send(response.posts);
		});
	});
};