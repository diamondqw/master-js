function callback()
{console.log(`execute call back`)


}
function A(callback,time)
{
    setTimeout(callback,time)
    }

    A(callnack,2000);