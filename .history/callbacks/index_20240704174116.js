function delay(time,callback){
    setTimeout(()=>{
        callback()
    },time)
}
const A=()=>{
    console.log(`ex`)
}
delay(2000,)