<<<<<<< HEAD
// function callBack(){
//     console.log('lol');
//   }
//   let timeId  =  setInterval(callBack,2000)
//   console.log(timeId);
  
//   clearInterval(timeId)
var intervalID;

function startInterval() {
  var delay = 1000; // Initial interval delay

  intervalID = setInterval(function() {
    console.log('Interval executed');
    // Example of conditionally adjusting interval
    if (conditionToChangeInterval) {
      clearInterval(intervalID); // Clear previous interval
      delay = 500; // New interval delay
      intervalID = setInterval(arguments.callee, delay); // Restart interval with new delay
    }
  }, delay);
}

startInterval();
=======
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
>>>>>>> f2bcb2c12f623e6c5f1633739d7c2f4468e9ffd7
