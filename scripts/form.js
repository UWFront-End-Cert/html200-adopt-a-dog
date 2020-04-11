const submitFinal = document.getElementById('button-final');
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitFinal.appendChild(submitButton);

const form = document.getElementById('myForm');
const e =  form.elements;
for(let i = 0; i < e.length; i++) {
  //ACCESS NODE LIST LIKE ARRAY
  console.log(e[i]);
}
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");
})
