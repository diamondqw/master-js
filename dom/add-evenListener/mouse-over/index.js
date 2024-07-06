<<<<<<< HEAD
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
=======
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
  console.log(`${event.key}`)
})
document.addEventListener('keydown',function(event){
  console.log(event.key)
})
let inp = document.getElementById('inp')
document.addEventListener('keydown' ,function(event){
  if(event.keyCode===13){
    let inp = document.getElementById('inp')
    console.log(input.value)
    inbput.value=''
  }
  
})
>>>>>>> 2d6d10cf0a011c0352111484d72a40866b59b0f8
