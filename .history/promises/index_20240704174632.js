// Define the Promises function
function Promises(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`lol`);
        }, 2000);
    });
}

// Call the Promises function and chain the .then() method
Promises()
    .then((message) => {
        console.log(message); // This will log 'lol' after 2 seconds
    })
    .catch((error) => {
        console.error('Error:', error); // Optional: Handle any errors that might occur
    });
