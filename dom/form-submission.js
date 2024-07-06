// html
<form id="formj">
<input type="text" placeholder="enter something"/>
<button type="submit"> submit it </button>
</form>
// js 
const inpEl = document.getElementById('formj')
formj.addEventListener('submit' , function(event){
event.preventDefault();


})
