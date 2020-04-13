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

//radio button console log
//console.log($('.radio:selected').val());

function myAdoption() {
  const x = document.getElementById('myForm');
  const text = '';
  for(i = 0; i < x.length; i++) {
    text += x.elements[i].value + '<br>';
  }
  console.log(document.getElementById('name').value);
}
