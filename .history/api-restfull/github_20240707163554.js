// Twitter API endpoint
const url = 'https://api.twitter.com/2/tweets';

// Example request parameters
const params = {
  ids: '1234567890', // replace with actual tweet IDs
  'tweet.fields': 'created_at,author_id', // specify fields to retrieve
};

// Example authorization header (Bearer token)
const headers = {
  Authorization: 'Bearer YOUR_TWITTER_BEARER_TOKEN',
};

// Make GET request to Twitter API
fetch(url + '?' + new URLSearchParams(params), {
  headers,
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
