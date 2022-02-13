

var form = document.createElement('form');
document.body.appendChild(form);


const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

submitButton.classList = "button-two";

  form.appendChild(submitButton);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert ('"Thank you. The form information has been received')

  });
