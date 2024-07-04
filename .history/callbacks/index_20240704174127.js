function delay(time,callback){
    setTimeout(()=>{
        callback()
    },time)
}
const A=()=>{
    console.log(`exectuing after 2milliSeconds`)
}
delay(2000,A)