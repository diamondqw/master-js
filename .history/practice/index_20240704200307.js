function callback(){
    console.log(`${execute call back}`)
    }
    setTimeOut(callback,2000)
    function A(callback,time){
    setTimeout(callback,time)
    }
    
    A(callBack,2000);