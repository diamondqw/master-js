fetch('http://api.example.com/data')
.then(response=>response.json())
.then(data=>console.log(response))
.catch(error=>console.log(error))
axios.get('http://api.example.com/data')
.then(response=>{
  console.log(response)
})
.then(data=>{console.log(data))
.catch(error=>{console.log(error))
let jsonstring = '{"name":"pawan","age":"19"}'
 let obj = JSON.parse(jsonstring)
               let objw={name:'pawan', age:19}
               let jsonString = objw.stringify(objw)
