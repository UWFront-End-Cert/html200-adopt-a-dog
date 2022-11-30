//const form = document.querySelector('form');

//let formData = new FormData(form);
$(function(){
  console.log("DOM is READY, javascript a go")

const fields = [
  {
    name: 'customerName',
    label: 'Name',
    type: 'text'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email'
  },
  {
    name: 'streetAddress',
    label: 'Street Address',
    type: 'text'
  },
  {
    name: 'city',
    label: 'City',
    type: 'text'
  },
  {
    name: 'state',
    label: 'State',
    type: 'select'
  }
];

const footer = document.querySelector('footer');

//later - add options for select drop downs and radio button options?

const checkoutForm = document.createElement('form');
document.body.insertBefore(checkoutForm, footer);

for (let i = 0; i < fields.length; i +=1) {
  const field = fields[i];

  const label = document.createElement('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name);

  const input = document.createElement('input');
  input.setAttribute('id', field.name);
  checkoutForm.appendChild(label);
  checkoutForm.appendChild(input);
}


const submit = document.createElement('button');

checkoutForm.appendChild(submit);
submit.setAttribute('type', 'submit');
submit.textContent = 'Submit';
submit.classList.add('submit-button');

//let formData = new FormData();

//Refactored below with jq
/*
checkoutForm.addEventListener('submit', function(event){
  event.preventDefault();
  alert('Thank you. The form information has been received.');
  for (let j = 0; j < fields.length; j +=1) {
    const fieldName = fields[j];
    let answer = document.getElementById(fieldName.name);
    console.log(answer.value)
  }
});
*/

//Form submission with Jq
$(checkoutForm).submit(function( event ){
  event.preventDefault();
  alert('Thank you. The form information has been received.');
  for (let j = 0; j < fields.length; j +=1) {
    const fieldName = fields[j];
    let answer = document.getElementById(fieldName.name);
    console.log(answer.value)
  }
});


//final closing brackets
})
