
const mainStart = document.getElementById('main-start');

const checkout = [
  {
    dropDown: false,
    name: 'name',
    label: 'Name'
  },
  {
    dropDown: false,
    name: 'email',
    label: 'E-Mail'
  },
  {
    dropDown: false,
    name: 'address',
    label: 'Street Address'
  },
  {
    dropDown: false,
    name: 'city',
    label: 'City'
  },
  {
    dropDown: true,
    name: 'state',
    label: 'State',
    states: ['WA', 'CA', 'OR']
  },
  {
    dropDown: false,
    name: 'zip',
    label: 'Zip Code'
  },
];

const form = document.createElement('form');
mainStart.appendChild(form);

for (let i=0; i< checkout.length; i++){

  const field = checkout[i];

  if(field.dropDown === true) {
    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const select = document.createElement('select');
    select.setAttribute('id', field.name);
    select.setAttribute('name', field.name);

    form.appendChild(label);
    form.appendChild(select);

    for (let i=0; i < field['states'].length; i++) {
      // you were able to do it! now make sure the values work
      const option = document.createElement('option');
      option.setAttribute('value', field['states'][i]);
      option.innerText = field['states'][i];
      select.appendChild(option);
    }

  } else {
    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');
    input.setAttribute('id', field.name);

    form.appendChild(label);
    form.appendChild(input);
  };
}
