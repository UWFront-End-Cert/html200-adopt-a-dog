/*-------------------------------------------------------------
Course Project Week 7 - Refactor Blog Page
Bonus 2: Generate all the dog tiles dynamically from an array.
Reference Lesson07b Creating a Form Dynamically video
--------------------------------------------------------------*/
//create array of the dog tiles
const dogs = [
  {
    name: 'Murphy',
    breed: 'Labrador',
    image: 'images/murphy-card.jpg',
    alt: 'murphy brownn and white dog face color',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Poppy',
    breed: 'Shi Tzu',
    image: 'images/poppy-card.jpg',
    alt: 'poppy small white dog running',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Jack',
    breed: 'Beagle',
    image: 'images/jack-card.jpg',
    alt: 'jack small dog with white and brown face sitting on the floor',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Duffy',
    breed: 'Pitbull',
    image: 'images/duffy-card.jpg',
    alt: 'a dog with white face and brown ears sitting on the grass',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Lucas',
    breed: 'German Shepherd',
    image: 'images/lucas-card.jpg',
    alt: 'a black dog smiling face',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Jake',
    breed: 'Golden Retriever',
    image: 'images/jake-card.jpg',
    alt: 'a white dog sitting',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Angus',
    breed: 'Boxer',
    image: 'images/angus-card.jpg',
    alt: 'a brown dog smiling and standing on grass',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Violet',
    breed: 'Chocolate Labrador Retriever',
    image: 'images/violet-card.jpg',
    alt: 'a dark brown puppy sitting on the floor',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Piper',
    breed: 'Chocolate Labrador/Golden Retriever',
    image: 'images/piper-card.jpg',
    alt: 'a brown dog standing with smiling face',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Maximus',
    breed: 'Miniature schnauzer',
    image: 'images/maximus-card.jpg',
    alt: 'a black dog standing',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Luna',
    breed: 'Labrador retriever',
    image: 'images/luna-card.jpg',
    alt: 'a white dog smiling',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    name: 'Stella',
    breed: 'Chihuahua',
    image: 'images/stella-card.jpg',
    alt: 'a light brown puppy laying down on the couch',
    price: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
];

//get the html element by ID (dog-tiles) and store it to variable dogContainer
const dogContainer = document.getElementById('dog-tiles');

//loop through dogs array. For each dog, builds the div, article, figure, image, text
//then insert it into the page
for (let i = 0; i < dogs.length; i++) {
  const dog = dogs[i];
  //create article
  const article = document.createElement('article');
  //add a css class (dog-card) to the element
  article.classList.add('dog-card');
  //create figure element
  const figure = document.createElement('figure');
  //create image element
  const img = document.createElement('img');
  //assign src to the dog.image
  img.src = dog.image;
  //assign alt to the dog.alt
  img.alt = dog.alt;
  //add the onclick to show name, breed and price
  img.setAttribute('onclick', `showDogInfo('${dog.name}', '${dog.breed}', ${dog.price})`);
  //append img to the figure
  figure.appendChild(img);

  //create header for dog name
  const h2 = document.createElement('h2');
  //assign the text contents to dog.name
  h2.textContent = dog.name;

  //create price paragraph 
  const p1 = document.createElement('p');
  const strong = document.createElement('strong');
  //assign the text contents to strong
  strong.textContent = 'Cost to Adopt:';
  //append strong to price paragraph p1
  p1.appendChild(strong);
  p1.append(` $${dog.price.toFixed(2)}`);
 
  //create description paragraph
  const p2 = document.createElement('p');
  //assign the text contents to dog.description
  p2.textContent = dog.description;

  //add Adopt button
  const button = document.createElement('button');
  button.classList.add('adopt-btn');
  button.textContent = 'Adopt';
  button.setAttribute('onclick', `addToTotal(${dog.price})`);

  //append figure, h2, p1, p2, button to article
  article.appendChild(figure);
  article.appendChild(h2);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(button);
  
  //append article to the dogContainer
  dogContainer.appendChild(article);
}
