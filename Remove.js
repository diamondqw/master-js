let btnEl = document.getElementById('btn')
btnEl.addEventListener('click', function(){
  btnEl.textContent='added';
  btnEl.removeEventListener()
})
