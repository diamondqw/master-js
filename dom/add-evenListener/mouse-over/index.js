let cont   = document.getElementById('dv');
dv.addEventListener('mouseover' ,function(event){
  dv.textContent='mouse over me ';
  dv.style.backgroundColor ='red'
})
dv.addEventListener('mouseout',function(event){
  dv.textContent = 'hover me '
  dv.style.backgroundColort ='yellow'
})
dv.addEventListener('keydown',function(event){
  console.log('hi')
})
document.addEventListener('keydown',function(event){
  console.log(event.key)
})