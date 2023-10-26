const fields = [
  {
    name: 'full-name',
    label: 'Full Name'
  },
  {
    name: 'email',
    label: 'Email Address'
  },
  {
    name: 'address',
    label: 'Address'
  },
  {
    name: 'city',
    label: 'City'
  },
  {
    name: 'state',
    label: 'State'
  },
  {
    name: 'zip-code',
    label: 'Zip code'
  },
  {
    name: 'first-time-adopter',
    label: 'First time adopter'
  },
  {
    name: 'location',
    label: 'Pick-up-location'
  }
];

const form = document.createElement('id-form');
document.body.appendChild(form);

for (let i = 0; i < fields.length; i += 1){
  const field = fields[i];

  const label = document.createElement('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name);

  const input = document.createElement('input');
  input.setAttribute('id', field.name);

  form.appendChild(label);
  form.appendChild(input);
}
  console.log(form); //console log does not work yet

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);


form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');

})




/*
const title = document.createElement('h1');
title.textContent = 'New Blog';
document.body.appendChild(title);
const container = document.getElementById('id-blog');
document.insertBefore(title, container);

const paragraph = document.createElement('p');
const node = document.createTextNode('Read all about our various undergraduate degree programs.');
paragraph.appendChild(node);

const element = document.getElementById('id-blog');
element.appendChild(paragraph);
*/
