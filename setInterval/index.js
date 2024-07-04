function callBack(){
  console.log('lol');
}
let timeId  =  setInterval(callBack,2000)
console.log(timeId);

clearInterval(timeId)
