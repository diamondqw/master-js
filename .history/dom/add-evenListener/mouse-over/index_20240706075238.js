let cont   = document.getElementById('dv');
dv.addEventListener('mouseover' ,function(event){
  dv.textContent='mouse over me ';
  dv.style.backgroundColor ='red'
})
dv.addEventListener('mouseout',function(event){
  dv.textContent = 'hover me '
  dv.style.backgroundColor ='yellow'
})
