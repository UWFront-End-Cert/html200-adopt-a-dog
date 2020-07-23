const fields = [
    {
        name: 'full-name',
        label: 'Full Name:'
    },
    
    //document.write("\n"),
    //document.write("<br />");

    {
        name: 'email',
        label: 'Email Address:'
    },

    {
        name: 'address',
        label: 'Street Address:'
    },

    {
        name: 'city',
        label: 'City:'
    },

    {
        name: 'state',
        label: 'State:'
    },

    {
        name: 'zipcode',
        label: 'Zipcode:'
    }
];

const form = document.createElement('form');
document.body.appendChild(form);

for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field, name);

    const input = document.createElement('input');
    document.write("&#60 br /&#62");
    input.setAttribute('id', field.name);


    //const space = document.write('<br/>');
    //document.write("&#60 br /&#62");     

    form.appendChild(label);    
    form.appendChild(input);
    //document.write("&#60 br /&#62");
    //form.appendChild(space);     
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you!');
});

console.log('input');