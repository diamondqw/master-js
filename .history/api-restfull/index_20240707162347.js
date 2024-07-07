// GitHub API endpoint
const url = 'https://api.github.com/repos/octocat/hello-world/issues';

// Example request parameters
const params = {
  state: 'open', // specify issue state
};

// Example basic authentication (username and personal access token)
const headers = new Headers({
  Authorization: 'Basic ' + btoa('your_username:your_personal_access_token'),
});

// Make GET request to GitHub API
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
