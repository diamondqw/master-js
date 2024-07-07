<<<<<<< HEAD
const url = 'https://maps.googleapis.com/maps/api/geocode/json';

// Example request parameters
const params = {
  address: '1600 Amphitheatre Parkway, Mountain View, CA',
  key: 'YOUR_GOOGLE_MAPS_API_KEY',
};

fetch(url+'?'+new URLSearchParams(params))
.then((response)=>{
  if(!response.ok){
    throw new Error("failed fetching");
  }
  return response.json()
})
.then((data)=>{
  console.log(data)
=======
const url = 'https://api.github.com/repos/octocat/hello-world/issues';
const params = {
  state: 'open',
};


const headers = new Headers({
  Authorization: 'Basic ' + btoa('your_username:your_personal_access_token'),
});
fetch(url +'?' +new URLSearchParams(params),{
  headers
})
.then((response)=>{
  if(!response.ok){
    throw new Error("failed to fetch data");
  }
  return response.json()
})

.then((data)=>{
  cosole.log(data)
>>>>>>> aa31ba8af0fca77f231f920ca618f7a267e2d53b
})
.catch((error)=>{
  console.log(error)
})
