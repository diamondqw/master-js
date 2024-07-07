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
})
.catch((error)=>{
  console.log(error)
})