const url ='http://api.twitter.com/2/tweets';
const params={
  ids:'1234567890'
  'tweet.fields':'created_at,author_id';
};
const headers={
  Authorization:'Bearer YOUR_TWITTER_BEARER_TOKEN',
}
fetch(url +'?' + new URLSearchParams(params),{
  headers
})
.then((response)=>{
  if(!response.ok){
  throw new Error("failed in fetching");
}
  return response.json()
})
.then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})
const xhr = new XMLHttpRequest();
xhr.open('GET','http://',true);
xhr.setRequestHeader('Content-type':'application/json')
xhr.onreadystatechange=function(){
  if(xhr. === XMLHttpRequest.DONE){
    
  }
}
