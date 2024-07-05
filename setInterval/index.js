function callBack(){
  console.log('lol');
}
let timeId  =  setInterval(callBack,2000)
console.log(timeId);

clearInterval(timeId)

function startInterval() {
  var delay = 1000; 

  intervalID = setInterval(function() {
    console.log('Interval executed');
    
    if (conditionToChangeInterval) {
      clearInterval(intervalID);
      delay = 500;
      intervalID = setInterval(arguments.callee, delay); 
    }
  }, delay);
}

startInterval();
function callbuck(){
  consol.log('lol')
}
let intervalID = setInterval(callback,2000)
clearInteraval(intervalId)
function cllbucks(){

  try{
    throw new Error("something went wrong")
  }
  catch(error){
    consol.error(error.message);
  }
}

let timeID  = setInterval(cllbucks,2000)
clearInterval(timeID)
