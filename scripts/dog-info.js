let dogName;
let fees = [];
let fee = 0;
let total = 0;

function viewDogInfo(dogName, breed, fee) {
  let dogInfo = 'Name: ' + dogName  + '\n' + 'Breed: ' + breed + '\n' + 'Fee: $' + fee;
  alert(dogInfo);
}

function addFee(dogName, fee, id, checkoutTotal) {
  fee = Number(fee);
  fees.push(fee);
  let total = fees.reduce(function(a, b) {
    return a + b;
   }, 0);
  let displayTotal = total.toFixed(2);
  alert('Name: ' + dogName + '\n' + 'Fee: ' + '$' + fee + '\n' + 'Total: ' + '$' + displayTotal);
  document.getElementById(id).disabled = true;
  document.getElementById(id).style.backgroundColor = "#808080";
  document.getElementById(checkoutTotal).innerHTML = '$' + displayTotal;
  return total;
} 


/********************************BLOG***************************************/

let id;
let title;
let fullText;
let imageURL;
let imageAltText;

const blogArticles = [
  {
    id: 'blog1',
    title: 'Traveling With Your Dog',
    fullText: 'Pellentesque tellus velit, finibus ac nisi non, euismod aliquam magna. In ac pretium ante, sit amet iaculis ligula. Proin viverra accumsan est, ut semper sapien imperdiet non. Pellentesque blandit accumsan sollicitudin. Nulla scelerisque facilisis semper. Fusce aliquet, turpis vitae sodales porta, sapien magna mattis dui, ut hendrerit risus lectus et ligula. Nullam eu nunc ultrices, mattis purus non, sollicitudin lacus. Curabitur varius id leo vel vulputate. Aenean non elit eleifend, laoreet sapien eget, vestibulum ipsum. Suspendisse ac ex ut mauris sodales accumsan.',
    imageURL: 'images/blog-1.jpg',
    imageAltText: 'Woman with dog sitting on a cliff overlooking a valley'
  },
  {
    id: 'blog2',
    title: 'How to Walk Multiple Dogs',
    fullText: 'Pellentesque tellus velit, finibus ac nisi non, euismod aliquam magna. In ac pretium ante, sit amet iaculis ligula. Proin viverra accumsan est, ut semper sapien imperdiet non. Pellentesque blandit accumsan sollicitudin. Nulla scelerisque facilisis semper. Fusce aliquet, turpis vitae sodales porta, sapien magna mattis dui, ut hendrerit risus lectus et ligula. Nullam eu nunc ultrices, mattis purus non, sollicitudin lacus. Curabitur varius id leo vel vulputate. Aenean non elit eleifend, laoreet sapien eget, vestibulum ipsum. Suspendisse ac ex ut mauris sodales accumsan.',
    imageURL: 'images/blog-2.jpg',
    imageAltText: 'Four dogs on a leash, sitting down in a park, one of them is yawning'
  },
  {
    id: 'blog3',
    title: 'Teach Your Dog to Fetch!',
    fullText: 'Pellentesque tellus velit, finibus ac nisi non, euismod aliquam magna. In ac pretium ante, sit amet iaculis ligula. Proin viverra accumsan est, ut semper sapien imperdiet non. Pellentesque blandit accumsan sollicitudin. Nulla scelerisque facilisis semper. Fusce aliquet, turpis vitae sodales porta, sapien magna mattis dui, ut hendrerit risus lectus et ligula. Nullam eu nunc ultrices, mattis purus non, sollicitudin lacus. Curabitur varius id leo vel vulputate. Aenean non elit eleifend, laoreet sapien eget, vestibulum ipsum. Suspendisse ac ex ut mauris sodales accumsan.',
    imageURL: 'images/blog-3.jpg',
    imageAltText: 'Silhouettes of person playing fetch with dog at sunset'
  }
];

for (let i = 0; i < blogArticles.length; i += 1) {
  let blogArticle = blogArticles[i];
/*
  let blogContainer = document.querySelector('blog-container');
  let post = document.createElement('article');
  blogContainer.appendChild(post);
  post.setAttribute('class', 'blog-article');
*/
  let post = document.getElementById(blogArticle.id);
  let images = document.createElement('img');
  post.appendChild(images);
  images.setAttribute('src', blogArticle.imageURL);
  images.setAttribute('width', '328');
  images.setAttribute('height', '310');
  images.setAttribute('class', 'blog-article-image');
  images.setAttribute('alt', blogArticle.imageAltText);

  let blogTextContainer = document.createElement('div');
  post.appendChild(blogTextContainer);
  blogTextContainer.setAttribute('class', 'blog-article-text');

  let headlineTitles = document.createElement('h2');
  blogTextContainer.appendChild(headlineTitles);
  headlineTitles.innerHTML = blogArticle.title;

  let blogText = document.createElement('p');
  blogTextContainer.appendChild(blogText);
  blogText.innerHTML = blogArticle.fullText;
  blogText.setAttribute('class', 'smaller-font-size');
}

/* 
const blogFields = [
  {
    name: 'title',
    label: 'Title'
  },
  {
    name: 'fullText',
    label: 'Full text'
  },
  {
    name: 'image',
    label: 'Image URL'
  }
];

const blogForm = document.createElement('form');
document.body.appendChild(blogForm);

for (let i = 0; i < blogFields.length; i += 1) {
  const blogField = blogFields[i];
  
  const label = document.createElement('label');
  label.textContent = blogField.label;
  label.setAttribute('for', blogField.name);

  const input = document.createElement('input');
  input.setAttribute('id', blogField.name);

  blogForm.appendChild(label);
  blogForm.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

blogForm.appendChild(submitButton);

let titleInput = document.getElementById('title');
let fullTextInput = document.getElementById('fullText');
let imageInput = document.getElementById('image');

blogForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you. The form information has been received.');
  console.log('Title: ' + titleInput.value + '\n' + 'Full text: ' + fullTextInput.value + '\n' + 'Image: ' + imageInput.value);
  document.getElementById('blog1-title').textContent = titleInput.value;
  document.getElementById('blog1-image').setAttribute('src', imageInput.value);
  document.getElementById('blog1-fullText').innerHTML = fullTextInput.value;
});
*/

const checkoutForm = document.getElementById('checkout-form');
const submitButton = document.getElementById('checkout-submit');

checkoutForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you. The form information has been received.');
});






