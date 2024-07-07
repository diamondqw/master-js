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
})
.catch((error)=>{
  console.log(error)
})
