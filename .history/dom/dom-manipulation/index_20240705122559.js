document.addEventListener('DOMContentLoaded',function(){
    let headingElement = document.getElementById("main-heading")
    let paraElement  = document.getElementById("paragraph")
    let buttonElement  = document.getElementById("change-text-button")
    buttonElement.addEventListener('click',function(){
      headingElement.textContent ="changed"
      paraElement.classList.add("highlight")
    })
    
      
    })