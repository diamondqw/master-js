let btnEl = document.getElementById('btn')
btnEl.addEventListener('click', function clear(){
  btnEl.textContent='added';
  btnEl.removeEventListener('click' , clear);
})
