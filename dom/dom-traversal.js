let btn = document.getElementById('btnel')
let parent = btn.parentNode
let child= btn.childNodes
let firstChild = btn.firstChild;
let secondChild = btn.secondChild;
let nextSibling = btn.nextSibling ;
let previousSibling = btn.previousSibling;
let children= btn.children;
let btn1 = document.querySelector('classname')
let btn2 = document.querySelectorAll('classname')
let exEl= document.querySelectorAll('.item')
exEl.forEach(items=>{
  console.log(items.textContent)
}
