
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

const form = document.createElement('form');
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

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');

})

const data = document.getElementById("id");
console.log(data.value);


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

function myFunction() {

  const title = document.createElement("h1");
  title.textContent = 'My Image';

// Create a p element:
const para = document.createElement("p");
// Create a text node:
const node = document.createTextNode("Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.");
// Append text node to the p element:
para.appendChild(node);
// Append the p element to the body:
document.getElementById("myDIV").appendChild(para);
}
/*
const degreeInfo = document.createElement('p');
degreeInfo.textContent = 'Read all about our various undergraduate degree programs'.*/
