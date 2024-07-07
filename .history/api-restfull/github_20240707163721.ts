const url: string = 'https://api.twitter.com/2/tweets';

interface Params {
  ids: string;
  'tweet.fields': string;
}

const params: Params = {
  ids: '1234567890', // replace with actual tweet IDs
  'tweet.fields': 'created_at,author_id', // specify fields to retrieve
};

interface Headers {
  Authorization: string;
}

const headers: Headers = {
  Authorization: 'Bearer YOUR_TWITTER_BEARER_TOKEN',
};

fetch(`${url}?${new URLSearchParams(params)}`, {
  headers,
})
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json();
  })
  .then((data: any) => {
    console.log(data);
  })
  .catch((error: Error) => {
    console.error('Error:', error);
  });
