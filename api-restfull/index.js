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
