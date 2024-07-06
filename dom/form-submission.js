// html
<form id="formj">
<input type="text" id="textinp" placeholder="enter something"/>
<button type="submit"> submit it </button>
</form>
// js 
let formx = document.getElemenyId("formj")
formx.addEventListener('submit' , function(event){
event.preventDefault();
  let inpfield = document.getElementById('textinp')
  const value = inpfield.value;
  if(inpfield.trim()====null){
    alert("enter something");
    return;
  }

  alert(value);
  


})
