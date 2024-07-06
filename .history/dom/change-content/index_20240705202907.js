
let dv = document.getElementById('container')
let ul = document.createElement('ul')
['AppLe','orange','potato'].forEach(fruit =>{
    let li = document.createElement('li');
    li.textContent=fruit; ul.appendChild(li)})
dv.appendChild(ul)
// JavaScript code to create a list of fruits and append it to the container div
let dv = document.getElementById('container');
let ul = document.createElement('ul');

['Apple', 'Orange', 'Potato'].forEach(fruit => {
    let li = document.createElement('li');
    li.textContent = fruit;
    ul.appendChild(li);
});

dv.appendChild(ul);
