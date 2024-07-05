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
