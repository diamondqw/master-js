function callback()
{console.log(`execute call back`)


}
function A(callback,time)
{
    setTimeout(callback,time)
    }

    A(callback,2000);
<<<<<<< HEAD

   
    for (var i = 1; i <= 5; i++) {
        (function(j) {
          setTimeout(function() {
            console.log(j);
          }, j * 1000);
        })(i);
      }
      
=======
 for (var i = 1; i <= 5; i++) {
        setTimeout(function() {
          console.log(i);
        }, 1000);
      }
for(let i=1;i<=5;i++){
    (function(j){
        setTimeOut(function(){
            console.log(j)
        },j*1000)
    })(i)    
}
>>>>>>> 74ecc6d368644129d5fa3200dee205ef07faf07c
