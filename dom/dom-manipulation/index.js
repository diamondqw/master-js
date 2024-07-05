<<<<<<< HEAD
document.addEventListener('DOMContentLoaded',function(){
    let headingElement = document.getElementById("main-heading")
    let paraElement  = document.getElementById("paragraph")
    let buttonElement  = document.getElementById("change-text-button")
    buttonElement.addEventListener('click',function(){
      headingElement.textContent ="changed"
      paraElement.classList.add("highlight")
    })
    
      
    })
=======
document.addEventListener('DOMContentLoaded',function(){
let headingElement = document.getElementById("main-heading")
let paraElement  = document.getElementById("paragraph")
let buttonLElement  = document.getElementById("change-text-button")
buttonElement.addEventListener('click',function(){
  headingElement.textContent ="changed"
  paraElement.classList.add("hightlight")
})

  
})
>>>>>>> 7ed451cc4cf3c6ec998ad0b1ec7ba13677284f42
