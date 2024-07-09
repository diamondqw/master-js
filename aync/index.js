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
async function A(){
    try{
        let mess  = await promises()
        console.log(mess)
        let final  =await second(mess)
        console.log(`${final} +lol`)
    }
    catch(error){
        console.log(`${error}`)
    }
}
A()
