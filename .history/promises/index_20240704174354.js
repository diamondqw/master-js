function Promises(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
console.log(`${resolve}`)
        },2000)
    })
}
Promises
.then((message)=>console.log(message))