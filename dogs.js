// alert dog's on image click
const alertDogInfo = (name, breed, cost) => {
  alert('Dog Name: ' + name + ' |  Breed: ' + breed + ' |  Cost: $' + cost);
}

// alert cart total by adding all the fees
let total = 0;
const addToTotal = (cost) => {
  total += cost;
  alert('Cart Total is: $' + total);
}

const cards = document.querySelector('#cards');
const dogContent = [{
    img: 'images/murphy-card.jpg',
    title: 'Murphy',
    breed: 'Mixed-Breed',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/poppy-card.jpg',
    title: 'Poppy',
    breed: 'Poodle',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/jack-card.jpg',
    title: 'Jack',
    breed: 'Beagle',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/duffy-card.jpg',
    title: 'Duffy',
    breed: 'Pitbull',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/lucas-card.jpg',
    title: 'Lucas',
    breed: 'Shepherd',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/jake-card.jpg',
    title: 'Jake',
    breed: 'Labrador',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/angus-card.jpg',
    title: 'Angus',
    breed: 'Boxer',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/violet-card.jpg',
    title: 'Violet',
    breed: 'Labrador',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/piper-card.jpg',
    title: 'Piper',
    breed: 'Retriver',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/maximus-card.jpg',
    title: 'Maximus',
    breed: 'Schnauzer',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/luna-card.jpg',
    title: 'Luna',
    breed: 'Labrador',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
  {
    img: 'images/stella-card.jpg',
    title: 'Stella',
    breed: 'Chihuahua',
    description: 'Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    cost: 123.45
  },
]

for (let i = 0; i < dogContent.length; i++) {
  const dogItem = dogContent[i];

  //store alertDogInfo function in dogInfo
  const dogInfo = `alertDogInfo('${dogItem.title}','${dogItem.breed}',${dogItem.cost})`;

  //store addToToal function in cartTotal
  const cartTotal = `addToTotal(${dogItem.cost})`;

  //creates a div with a class of blog-box
  const dogBoxDiv = document.createElement('div');
  dogBoxDiv.setAttribute('class', 'card');

  //create an article tag
  const article = document.createElement('article');

  //create an img tag and sets the src for image
  const dogImg = document.createElement('img');
  dogImg.setAttribute('src', dogItem.img);
  dogImg.setAttribute('alt', dogItem.title);
  dogImg.setAttribute('onclick', dogInfo);

  //creates h4 heading and sets the text
  const h4 = document.createElement('h4');
  h4.textContent = dogItem.title;

  //create a small tag and sets the cost
  const small = document.createElement('small');
  small.innerHTML = `<strong>Cost to Adopt: </strong>$` + dogItem.cost;

  //create a figcaption and set the text
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = dogItem.description;

  //create a button
  const dogBtn = document.createElement('button');
  dogBtn.setAttribute('class', 'btn btn-adopt');
  dogBtn.textContent = 'Adopt';
  dogBtn.setAttribute('onclick', cartTotal);


  cards.appendChild(dogBoxDiv);
  dogBoxDiv.appendChild(article);
  article.appendChild(dogImg);
  article.appendChild(h4);
  article.appendChild(small);
  article.appendChild(figcaption);
  dogBoxDiv.appendChild(dogBtn);

}