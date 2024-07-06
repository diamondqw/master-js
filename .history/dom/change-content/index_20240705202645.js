
// dv.appendChild(ul);
let dv = document.getElementById('container')
let ul = document.createElement('ul')
['AppLe','orange','potato'].forEach(fruit =>{
    let li = document.createElement('li');
    li.textContent=fruit
    ul.appendChild(li)
})
dv.appendChild(ul)