function Promises(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(``)
        },2000)
    })
}
Promises
.then((message)=>console.log(message))