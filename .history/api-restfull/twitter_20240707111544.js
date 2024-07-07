// Example using fetch API to fetch tweets from Twitter
fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=OpenAI')
  .then(response => response.json())
  .then(tweets => {
    tweets.forEach(tweet => {
      console.log(tweet.text);=t
    });
  })
  .catch(error => console.error('Error fetching tweets:', error));
