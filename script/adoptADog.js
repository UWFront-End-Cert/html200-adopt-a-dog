function infoAboutDogs(name, breed, fee) {
  alert(`name: ${name} \nbreed: ${breed} \nfee: ${fee}`);
}

let currentTotal = 0;

function runningTotal(fee) {
  currentTotal = currentTotal + fee;
  let carts = currentTotal.toFixed(2);

  document.getElementById("cartAmount").innerHTML = `$${carts}`;
  console.log(carts);
  alert(`Your current total is $${carts}`);
}

/*--------------Blogs---------------*/
let blogsArray = [
{
  image: 'images/blog-1.jpg',
  heading: 'Traveling with your dog',
  p0: 'How far can you walk into the woods? 1/2 way',
  p1: 'One, two, cha cha cha'
},
{
  image: 'images/blog-2.jpg',
  heading: 'How to walk multiple dogs',
  p0: 'I am worried about the calendar. Its days are numbered.',
  p1: 'Cannot sleep. Clowns will eat me.'
},
{
  image: 'images/blog-3.jpg',
  heading: 'Teach your dog to fetch!',
  p0: 'Two drums and a cymbal fell off a cliff. Buh dum ching',
  p1: 'Blah dee blah blah blah'
}
];
  
/*------------First blog post----------*/
function blogBlog0(blogginOut) {
const blog0 = blogsArray[0];

const section0 = document.createElement('section');
const image0 = document.createElement('img');
const div0 = document.createElement('div');
const heading0 = document.createElement('h4');
const p00 = document.createElement('p');
const p10 = document.createElement('p');

section0.setAttribute('id', 'blogPost0');
heading0.setAttribute('id', 'heading0');
p00.setAttribute('id', 'p00');
p10.setAttribute('id', 'p10');

image0.src = blog0.image;

heading0.textContent = blog0.heading;
p00.textContent = blog0.p0;
p10.textContent = blog0.p1;

section0.classList.add("blog-grid-1");
div0.classList.add('blog');
heading0.classList.add('h4-blog');
p00.classList.add('blog-p');
p10.classList.add('blog-p');

document.body.appendChild(section0);
section0.appendChild(image0);
section0.appendChild(div0);
div0.appendChild(heading0);
div0.appendChild(p00);
div0.appendChild(p10);
}

/*------------Second blog post----------*/
function blogBlog1(blogginOut) {
const blog1 = blogsArray[1];

const section1 = document.createElement('section');
const image1 = document.createElement('img');
const div1 = document.createElement('div');
const heading1 = document.createElement('h4');
const p01 = document.createElement('p');
const p11 = document.createElement('p');

section1.setAttribute('id', 'blogPost1');
heading1.setAttribute('id', 'heading1');
p01.setAttribute('id', 'p01');
p11.setAttribute('id', 'p11');

image1.src = blog1.image;

heading1.textContent = blog1.heading;
p01.textContent = blog1.p0;
p11.textContent = blog1.p1;

section1.classList.add("blog-grid-2");
div1.classList.add('blog');
heading1.classList.add('h4-blog');
p01.classList.add('blog-p');
p11.classList.add('blog-p');

document.body.appendChild(section1);
section1.appendChild(image1);
section1.appendChild(div1);
div1.appendChild(heading1);
div1.appendChild(p01);
div1.appendChild(p11);
}

/*------------Third blog post----------*/
function blogBlog2(blogginOut) {
const blog2 = blogsArray[2];

const section2 = document.createElement('section');
const image2 = document.createElement('img');
const div2 = document.createElement('div');
const heading2 = document.createElement('h4');
const p02 = document.createElement('p');
const p12 = document.createElement('p');

section2.setAttribute('id', 'blogPost2');
heading2.setAttribute('id', 'heading2');
p02.setAttribute('id', 'p02');
p12.setAttribute('id', 'p12');

image2.src = blog2.image;

heading2.textContent = blog2.heading;
p02.textContent = blog2.p0;
p12.textContent = blog2.p1;

section2.classList.add("blog-grid-3");
div2.classList.add('blog');
heading2.classList.add('h4-blog');
p02.classList.add('blog-p');
p12.classList.add('blog-p');

document.body.appendChild(section2);
section2.appendChild(image2);
section2.appendChild(div2);
div2.appendChild(heading2);
div2.appendChild(p02);
div2.appendChild(p12);
}

/*--------------Checkout--------------*/
function thankYou(thanks) {
  const adopter = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    street: document.getElementById('street').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    firstAdopt: document.querySelector("input[name=adopter]:checked").value,
    zipcode: document.getElementById('zipCode').value,
    pickupLocation: document.getElementById('pickup').value
  };
  console.log(adopter);

  alert(`Thank you. ${adopter.name} \nThe form information has been received`);
}









//
