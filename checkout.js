const fields = [
  {
    name: 'applicant',
    label: 'Name'
  },
  {
    name: 'applicantEmail',
    label: 'Email Address'
  },
  {
    name: 'applicantAddress',
    label: 'Address'
  },
  {
    name: 'applicantCity',
    label: 'City'
  },
  {
    name: 'applicantState',
    label: 'State'
  },
  {
    name: 'applicantZip',
    label: 'Zip Code'
  },
];

const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.textContent = "Checkout";
h1.classList.add('blogheading');

const form = document.createElement('form');
document.body.appendChild(form);
form.classList.add('form');

for (let i = 0; i < fields.length; i ++) {
  const field = fields[i];

  const label = document.createElement('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name);

  const input = document.createElement('input');
  input.setAttribute('id', field.name);

  form.appendChild(label);
  form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.innerHTML = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted');}
);

let formInput = document.getElementsByTagName('input');
let formLabel = document.getElementsByTagName('label');
for(let j = 1,  l = 0; j < formInput.length, l < formLabel.length-1; j++, l++) {
    console.log(formLabel[l].innerHTML + ': ' + formInput[j].value);
    console.log(formInput.value);
}
