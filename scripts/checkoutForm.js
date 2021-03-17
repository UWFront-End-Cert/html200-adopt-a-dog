const form = document.getElementById('checkout-form');
//form.setAttribute('id', 'checkout-form');
//const fields = ['Name', 'Email', 'Street Address', 'City', 'State', 'Zip code', 'First time adopter?', 'Pickup location'];

//for (let i = 0; i < fields.length; i++) {
  //const label = document.createElement('label');
  //label.textContent = fields[i];
  //label.setAttribute('for', fields[i]);

  //const input = document.createElement('input');
  //input.setAttribute('type', 'text');
  //input.setAttribute('id', fields[i]);

  //form.appendChild(label);
  //form.appendChild(input);
//}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'submit';

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = document.getElementById('checkout-form').elements;
  const submitData = {};

  for (let i = 0; i < formData.length - 1; i++) {
    const val = document.getElementById('checkout-form').elements[i].value;
    const id = document.getElementById('checkout-form').elements[i].id;
    console.log('Id: ', id);
    console.log('Value: ', val);
    submitData[id] = val;
  }

  alert('Thank you. Your info has been submitted.')
  console.log(submitData);

});

form.appendChild(submitButton);
