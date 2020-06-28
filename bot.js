const config=require('./config');
const twit=require('twit');

const Twit = new twit(config);

function retweet() {
    let params={
        q: '#nestle',
        result_type: 'recent',
        count: 100,

    }
    Twit.get('search/tweets', params,(err, data, response)=>
    {
        let tweets=data.statuses
        if(!err) {
            for(let dat of tweets) {
                let retweetId = dat.id_str;
                Twit.post('statuses/retweet/:id', {id: retweetId}, (err, response)=>{
                    if(response) console.log('retweeted: ', retweetId);
                    if (err) console.log('UH OH');
                })
            }
        }
    })
}
setInterval(retweet, 15000);