/* Lesson 4 Assignment 2 */

let balance = 0;

/*click handlers that alerts the dog’s information when clicking on the dog’s photo. */
function dogBark(dogName, dogBreed, fee) {
  alert("Dog name: " + dogName + "\nDog breed: " +  dogBreed + "\nAdoption fee: $" + fee);
}

/* Click Handlers on each dog's button that will add to the total. Alert total. */
// Adopt button
function btnAdder(fee) {
  balance += parseInt(fee);
  alert(balance);
}

/* Lesson 8 Assignment */
/* Array of blog objects & loop */
const container = document.createElement('container');
const image = document.createElement('img');
image.src = './blog-1.jpg';

container.appendChild(image);

const headline = document.createElement('h2');
headline = 'Traveling With Your Dog';

container.appendChild(headline);

const blogtext = document.createElement('p');
blogtext.p = 'Iduciendisite quo magnatem iuntum quid quaest ea';
container.appendChild(blogtext);

for (let i = 0; i < image.length; i += 1) {
  const image = img[i];
}

for (let )
const container = document.getElementById('flex-container-blog');
const image = document.createElement('img');
image.src = './blog1.jpg';

container.appendChild(image);

const title = document.createElement('h2');
title.textContent = 'Traveling With Your Dog';

container.insertBefore(image, title);
