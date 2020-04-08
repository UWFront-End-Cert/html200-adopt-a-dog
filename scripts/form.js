const submitFinal = document.getElementById('button-final');
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitFinal.appendChild(submitButton);

document.getElementById('button-final').addEventListener("click", function myAdoption() {
  alert("Thank you. The form information has been received.");
});
