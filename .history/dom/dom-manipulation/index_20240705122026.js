let headingElement = document.getElementById("main-heading")
let paraElement  = document.getElementById("paragraph")
let buttonLElement  = document.getElementById("change-text-button")
buttonLElement.addEventListener('click',function(){
  headingElement.textContent ="changed"
  paraElement.classList.add("highlight")
})