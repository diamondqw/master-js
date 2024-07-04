function callback()
{console.log(`execute call back`)


}
function A(callback,time)
{
    setTimeout(callback,time)
    }

    A(callback,2000);

   
    for (var i = 1; i <= 5; i++) {
        (function(j) {
          setTimeout(function() {
            console.log(j);
          }, j * 1000);
        })(i);
      }
      