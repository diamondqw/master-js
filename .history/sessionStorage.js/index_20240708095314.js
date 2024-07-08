sessionStorage.setItem('key','value');
var sesGet  = sessionStorage.getItem('key');
var sesClear=sessionStorage.clear();
var sesEx = sessionStorage.setItem('username','pawam')
var sesExGet = sesssionStorage.getItem('username');
var removeItem =sessionStorage.removeItem('username')
// jsonstrings convert to objects 

var jsonString  = '{name":"pawan"}'
  var objS  ={
  name:"pawan",
  age:19
  }
var onjEx  =  sessionStorage.setItem('username',JSON.stringify(objS));
console.log(objEx.name);
var oyt = sessionStorage('usernme',jsonString)
var onjQw = JSON.parse(sessionStorage.getItem('usernme'));
console.log(usernme.name)