function callback()
{console.log(`execute call back`)


}
function A(callback,time)
{
    setTimeout(callback,time)
    }

    A(callback,2000);
    