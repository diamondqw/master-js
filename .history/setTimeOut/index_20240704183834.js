console.log("start")

setTimeout(()=>{
console.log(`execute after timeout 2 milliSecs`)
},2000)
console.log("end")
function delayfn(fn,time){a
    setTimeout(fn,time)
}
console.log("start")
function fn(){
    console.log(`exceute after timeout 2 milliSecs`)
}
delayfn(fn,2000)


console.log("end")