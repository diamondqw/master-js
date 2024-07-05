function callBack(){
  console.log('lol');
}
let timeId  =  setInterval(callBack,2000)
console.log(timeId);

clearInterval(timeId)

function startInterval() {
  var delay = 1000; // Initial interval delay

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
