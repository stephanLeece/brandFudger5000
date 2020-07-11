var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);
var params = {
	screen_name: '@nestle',
	count: 1,
};
T.get('statuses/user_timeline', params)
	.then((response) => {
		const userName = response.data[0].user.screen_name;
        const tweetId = response.data[0].id_str;
        console.log('YES')
		// T.post('statuses/update', {
		// 	status: '@nestle err, boop?',
		// 	in_reply_to_status_id: tweetId,
		// 	username: userName,
		// }).catch((error) => console.log('UH OH', error));
	})
	.catch((error) => console.log('UH OH', error));

