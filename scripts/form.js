const submitFinal = document.getElementById('button-final');
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitFinal.appendChild(submitButton);

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(form.elements.value);
  alert("Thank you. The form information has been received.");
})
