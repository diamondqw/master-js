// JavaScript code to create a button element and append it to the body
const btnEl = document.createElement('button');
btnEl.textContent = "Click me";
document.body.appendChild(btnEl);

// JavaScript code to handle button click event and remove the button
btnEl.addEventListener('click', function() {
  document.body.removeChild(btnEl);
});
