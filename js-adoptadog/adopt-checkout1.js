// L8 codealong w Brian

const fields = [
    {
        name: 'adopterFullName',
        label: 'Full Name'
    },
    {
        name: 'adopterEmail',
        label: 'Email Address'
    },
    {
        name: 'adopterAddress',
        label: 'Street Address'
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
        name: 'zip',
        label: 'Zip'
    }
];

const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.textContent = 'Checkout'

const form = document.createElement('form');
document.body.appendChild(form);
form.setAttribute('class', 'dog-form');

for (let i = 0; i < fields.length; i++) {
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
// submitButton.setAttribute('type', 'submit', 'Submit');
// the above displays msg but the button is tiny, below line button is visible
// submitButton.textContent = 'Submit';
submitButton.innerHTML = 'Submit';

form.appendChild(submitButton);

const pickupLoacation = document.createElement('label');
document.body.appendChild(pickupLoacation);
pickupLoacation.innerHTML = 'Pickup Loacation';

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received');

    let formInput = document.getElementsByTagName('input');
for(let j = 1; j < formInput.length; j++) {
    console.log(formInput[j].value);
}
});

// let formInput = document.getElementsByTagName('input');
// for(let j = 1; j < formInput.length; j++) {
//     console.log(formInput[j].value);
// }
