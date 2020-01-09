const container = document.getElementById('container');
const heading = document.createElement('h2');
heading.textContent = "Checkout";
container.appendChild(heading);
const fields = [
  {
    name: 'name',
    label: 'Name'
  },
  {
    name:'email',
    label:'Email Address'
  },
  {
    name:'city',
    label:'City'
  },
  {
    name:'state',
    label:'State'
  },
  {
    name:'zip-code',
    label:'Zip Code'
  },
  {
    name:'first-time-adopter',
    label:'First Time Adopter'
  },
  {
    name:'location',
    label:'Pickup location'
  }
];
const form = document.createElement('form');
form.setAttribute('id','theForm')
form.setAttribute('method','GET');
document.body.appendChild(form);
for (let i = 0; i < fields.length; i += 1) {
const field = fields[i];

const label = document.createElement('label');
label.textContent = field.label;
label.setAttribute('for', field.name);

const input = document.createElement('input');
input.setAttribute('id',field.name);
input.setAttribute('type','text');
input.setAttribute('value','');
form.appendChild(label);
form.appendChild(input);
}
container.appendChild(form);
container.insertBefore(heading,form);
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);
form.addEventListener('submit', function(e) {
  alert('Thank you. The form information has been received');
  e.preventdefault();
});
