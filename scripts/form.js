const submitFinal = document.getElementById('button-final');
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitFinal.appendChild(submitButton);

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  myAdoption();
  alert("Thank you. The form information has been received.");
})

function myAdoption() {
  const x = document.getElementById('myForm');
  let text = ' ';
  for (let i = 0; i < x.length; i++) {
    if(x.elements[i].type == 'radio') {
      if(x.elements[i].checked == false) {
        continue;
      }
    }
    text += x.elements[i].name + ' : ' + x.elements[i].value + '\n';
  }
  console.log(text);
}
