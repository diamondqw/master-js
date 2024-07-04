function delay(time,callback){
    setTimeout(()=>{
        callback()
    },time)
}
const A=()=>{
    console.log(`${executing after 2 milli seconds}`)
}
delay(2000,)