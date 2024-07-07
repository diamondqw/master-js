fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=OpenAI')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(tweets => {
    if (Array.isArray(tweets)) {
      tweets.forEach(tweet => {
        console.log(tweet.text);
      });
    } else {
      console.error('Unexpected response format:', tweets);
    }
  })
  .catch(error => console.error('Error fetching tweets:', error));
