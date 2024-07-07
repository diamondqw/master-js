fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(posts => {
    posts.forEach(post => {
      console.log(post.title); // Assuming 'title' property exists in each post
    });
  })
  .catch(error => console.error('Error fetching posts:', error));
