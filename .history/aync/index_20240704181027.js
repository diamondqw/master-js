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
        let final  =await second(mess)
        console.log(`${fin}`)
    }
    catch(error){
        console.log(`${error}`)
    }
}
A()