function delay(time,callback){
    setTimeout(()=>{
        callback()
    },time)
}
delay