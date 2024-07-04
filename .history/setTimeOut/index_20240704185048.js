console.log("start")

setTimeout(()=>{
console.log(`execute after timeout 2 milliSecs`)
},2000)
console.log("end")
function delayfn(fn,time){
    setTimeout(fn,time)
}
console.log("start")
function fn(){
    console.log(`exceute after timeout 2 milliSecs`)
}
delayfn(fn,2000)


console.log("end")




// Question: How can you handle errors that might occur within a setTimeout callback?


setTimeout(function(){
    try{
        throw new Error("oops error occuring")
    }
    catch(error){
        console.error(`${error.message}`)
    }
},2000)
// Question: How can you simulate a recurring setTimeout without using setInterval?

let count=0;
function recurringcounter(){
    console.log(`${count}`);
    count++;
    console.log(count)
    setTimeout(recurringcounter, 2000);
}
setTimeout(recurringcounter,2000);