let xhr = XMLHttpRequest();
// created a xmlrequest object  
xhr.open('GET','http://api.example.com/data',true)
xhr.setHeaderRequest('Content-type','application-json')
xhr.onreadystatechange = function(){
  if(xhr.readyState === XMLHttpRequest.DONE){
    if(xhr.status ===200){
      console.log(xhr.responseText)
    }
    else{
      console..log(xhr.status)
    }
  }
}
xhr.send();
let xhrw  =  XMLHttpRRequest()
xhrw.open('POST','http://api.example.com/data',true);
xhrw.setHeaderRequest('Content-type','application/json');
let daat =JSON.stringfy({key:'value'})
xhr.send(daat);
function h(method,url,data){
   return new Promise((resolve,reject)=>{
     let xhr = XMLHttpRequest();
  xhr.open(methog,url,true)
  xhr.setHeaderRequest('Content-type','application/json');
  xhr.onreadystatechange=function(){
    if(xhr.readyState === XHMLHttpRequest.DONE){
      if(xhr.status ==200){
        resolve(JSON.parse(xhr.responseText))
        
      }
      else{
        reject(xhr.statusText)
      }
    }
  }
     xhr.send(data)
   })
  
}
h().then((response )=>{
  console.log(response)
})
.catch(error){
  console.log(error)
}
const  pranathiBangramBujjiKanna =(mode,number,proposal)=>{
   return new Promise((resolve,reject)=>{
     let requestFrom-pawan = ForgiveMeRequest();
  requestFrom-pawan.open(mode,number,true)
requestFrom-pawan.setBeggingRequest('Content-type','love-me-back');
  requestFrom-pawan.onPranthiDecision=function(){
    if(requestFrom-pawan.Proposal === 'Pranthi.Anger.OVER'){
      if(Pranthi.mode === 'OK'){
        accept(FORGIVE-PAWAN(requestFrom-pawan))
        
      }
      else{
        reject(TRY-TOFORGIVE(requestFrom-pawan))
      }
    }
  }
     requestFrom-pawan(proposal)
   })
  
}
pranathiBangramBujjiKanna().then((response )=>{
  console.log(response)
})
.catch(scold){
  console.log(`${scold pawan}`)
}
