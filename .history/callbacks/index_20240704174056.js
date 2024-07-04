function delay(time,callback){
    setTimeout(()=>{
        callback()
    },time)
}
const A=()=>{
    console.log(`
        ${
            executing after 2 minn
        }`)
}
delay(2000,)