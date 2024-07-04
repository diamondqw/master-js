function Promises(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`
                lol`)
        },2000)
    })
}
Promises
.then((message)=>console.log(message))