
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
    choices: ['WA', 'CA', 'OR']
  },
  {
    dropDown: false,
    name: 'zip',
    label: 'Zip Code'
  },
  {
    dropDown: false,
    type: 'radio',
    name: 'returning',
    answer: ['Yes', 'No'],
    id: 'yes'
  },
  {
    dropDown: true,
    name: 'pickup',
    label: 'Pickup Location',
    id: 'pickup',
    choices: ['Seattle', 'Portland', 'San Francisco']
  }
];

const dogHouse = [
  {
    name: 'Lucas',
    cost: 123.45,
    img: 'images/lucas-card.jpg',
    altText: 'Portrait of Lucas'
  },
  {
    name: 'Duffy',
    cost: 150,
    img: 'images/duffy-card.jpg',
    altText: 'Potrait of Duffy'
  }
];

const form = document.createElement('form');
mainStart.appendChild(form);

for (let i=0; i< checkout.length; i++){

  const field = checkout[i];

  if(field.dropDown === true) {
    //Makes the dropdown
    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const select = document.createElement('select');
    select.setAttribute('id', field.name);
    select.setAttribute('name', field.name);

    form.appendChild(label);
    form.appendChild(select);

    //Creates the options of the dropdown
    for (let i=0; i < field['choices'].length; i++) {
      const option = document.createElement('option');
      option.setAttribute('value', field['choices'][i]);
      option.innerText = field['choices'][i];
      select.appendChild(option);
    }

  } else if (field.type === 'radio') {
      //Creates the question
      const pQuestion = document.createElement('p');
      pQuestion.innerText = 'First time adopter?';
      form.appendChild(pQuestion);

      //Creates the radio input buttons and label
      for (let i=0; i < field['answer'].length; i++){

        const input = document.createElement('input');
        input.setAttribute('type', field.type);
        input.setAttribute('name', field.name);
        input.setAttribute('id', field['answer'][i]);
        input.setAttribute('value', field['answer'][i]);

        const label = document.createElement('label');
        label.textContent = field['answer'][i];
        label.setAttribute = field['answer'][i];

        form.appendChild(input);
        form.appendChild(label);
        }

      } else {

        //Creates text input
        const label = document.createElement('label');
        label.textContent = field.label;
        label.setAttribute('for', field.name);

        const input = document.createElement('input');
        input.setAttribute('id', field.name);

        form.appendChild(label);
        form.appendChild(input);
  }

}

//This is where the Dog cards are assembled

const dogQuestion = document.createElement('p');
dogQuestion.innerText = 'Dogs Adopted';

form.appendChild(dogQuestion);

for(let i = 0; i < dogHouse.length; i++){
  const dogCard = document.createElement('img');
  dogCard.setAttribute('src', dogHouse[i].img);

  const  dogName = document.createElement('p');
  dogName.innerText = dogHouse[i].name;

  const costLabel = document.createElement('p');
  costLabel.innerText = 'Cost to adopt: ';

  const dogPrice = document.createElement('p');
  const dogObjectPrice = dogHouse[i].cost;
  dogPrice.innerText = dogObjectPrice.toString();

  form.appendChild(dogCard);
  form.appendChild(dogName);
  form.appendChild(costLabel);
  form.appendChild(dogPrice);

}

const totalTag = document.createElement('p');
totalTag.innerText = 'Total Adoption Cost';

const totalDogAdoptionPrice = document.createElement('p');

// How to find the total sum of all the dogs?
// Create a function that pulls the price and adds them togehter?
// Or is there a way to pull that information from above loop?


// Lastly create the submit button
