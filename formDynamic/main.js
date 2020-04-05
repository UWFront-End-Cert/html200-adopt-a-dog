const fields = [
    {
        name: 'full-name',
        label: 'Full Name'
    },
    {
        name: 'email',
        label: 'Email address'
    }
];

const form = document.createElement('form');

document.body.appendChild(form);

for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    const label = document.createElement('label');
    label.setAttribute('for', field.name);
    label.textContent = field.label;

    const inputField = document.createElement('input');
    inputField.setAttribute('id', field.name);

    form.appendChild(label);
    form.appendChild(inputField);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});
