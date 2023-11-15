const form = document.createElement('form');
document.body.appendChild(form);

const submitButton = document.createElement('button');
submitButton.setAttribute('type' , 'submit');
submitButton.textContent = 'Submit'

form.appendChild(submitButton);

form.addEventListener('submit' , function(event) {
    event.preventDefault();
    alert('Form submitted' );
});



















