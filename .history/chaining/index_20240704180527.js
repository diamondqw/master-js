function promises(){
    return new Promise((resolve)=>{
        resolve(`lol`)
    })
}
function second(messa){
    return new Promise((resolve)=>{
        resolve(`${messa}`)
    })
}
promises()
.then((messa)=>{
    console.log(`${messa}`)
    return second(messa)
})
.then((finalmess)=>{
    console.lo
})