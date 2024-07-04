console.log("start")

setTimeout(()=>{
console.log(`execute after timeout 2 milliSecs`)
},2000)
console.log("end")
function delayfn(fn,time){
    setTimeout(fn,time)
}
function fn(){
    console.log(`exceute after timeout 2 milliSecs`)
}