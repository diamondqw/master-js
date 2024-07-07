fetch('http://api.example.com/data)
.then((response) => response.json()
)      
.then((data) => console.log(data)
)
.catch((error) => console.log(error)
)
fetch('http://api.example.com/data',{
  method:'POST',
  headers:{
    'Content-type':'application/json',
    
  }
  body:JSON.stringfy({key:'value'})
})
.then((response=>response.json())
.then((data)=>console.log(data)) 
.catch((error)=>console.log(error));
// AXIOS 
axios.get('http://api.example.com/data');
.then(response=>console.log(response.data));
.then(error=>console.log(error);
axios.post('http:/api.example.como/data',{key:'value'})

//real world exmaple of this techniques

fetch('http:api.example.com/data')
.then(response=>console.log(response))
.then(user=>user.forEach(use=>{
  consoel.log(use.name)
}))
.then(error=>console.log(error))
