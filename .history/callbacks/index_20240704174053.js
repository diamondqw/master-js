function delay(time,callback){
    setTimeout(()=>{
        callback()
    },time)
}
const A=()=>{
    console.log(`
        ${
            executing after 
        }`)
}
delay(2000,)