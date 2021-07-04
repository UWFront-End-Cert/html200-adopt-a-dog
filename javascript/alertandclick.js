/* index page for dog description and total price */

function dogImagesDetails (dogInfo) {
  alert('My name is ' + dogInfo +  '; Dog Breed: Golden Retriever; $123.45');
}

let cartTotal = 0;

function dogTotal (dogPrice) {
  cartTotal = cartTotal + dogPrice;
  alert (cartTotal);
}





/* blog page */


const blogPage = document.getElementById('blog-head');
if (blogPage) {
  document.getElementById('blog-head').innerHTML='Adopt A Dog';
  document.getElementById('blog-head').style.backgroundColor="pink";
  document.getElementById('blog-head').style.fontWeight="bold";




/*
const blog = {
    title: 'How to walk with multiple dog',
    paragraph: 'whatever this is the paragraph ',
}

const div = document.createElement('div')

document.body.appendChild(div)

const h2 = document.createElement('h2')
h2.innerHTML = blog.title

const p = document.createElement('p')
p.innerHTML = blog.paragraph

div.appendChild(h2)
div.appendChild(p)

*/

  const footerTag = document.querySelector('footer');

  const image = document.createElement('img');
  image.setAttribute('src', 'images/blog-1.jpg');
  image.style.cssFloat = 'left';
  image.style.margin = '1rem 1rem 1rem 1rem';
  image.style.padding = '1rem 2rem 1rem 5rem';

  const title = document.createElement('h2');
  title.textContent = 'Traveling with your dog';
  title.style.color = '#283e60';
  title.style.textAlign = 'center';
  title.style.margin = '1rem 1rem 1rem 1rem';
  title.style.padding = '2rem 1rem 1rem 2rem';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Proin eget augue sed ex tempor convallis id nec leo. Quisque at ornare quam, vitae eleifend mi. Etiam euismod eros malesuada neque tincidunt feugiat convallis a magna. Cras et quam id felis sodales pulvinar. Nullam rutrum tortor ac diam pulvinar, vitae consequat nunc feugiat. Sed posuere justo finibus justo iaculis lacinia. Pellentesque vitae ligula nisl. Etiam dapibus nulla vel sem elementum, ac cursus purus faucibus. Nulla non sodales orci. Proin molestie in enim faucibus maximus. Morbi magna magna, tempus vitae sodales sed, scelerisque sit amet ligula.';
  paragraph.style.textAlign = 'center';
  paragraph.style.margin = '1rem 2rem 6rem 2rem';
  paragraph.style.padding = '1rem 2rem 7rem 1rem';


  document.body.appendChild(image);
  document.body.appendChild(title);
  document.body.appendChild(paragraph);
  document.body.insertBefore(image, footerTag);
  document.body.insertBefore(title, footerTag);
  document.body.insertBefore(paragraph, footerTag);

  const image2 = document.createElement('img');
  image2.setAttribute('src', 'images/blog-2.jpg');
  image2.style.cssFloat = 'left';
  image2.style.margin = '1rem 1rem 1rem 1rem';
  image2.style.padding = '1rem 2rem 1rem 5rem';

  const title2 = document.createElement('h2');
  title2.textContent = 'How to Walk Multiple Dogs';
  title2.style.color = '#283e60';
  title2.style.textAlign = 'center';
  title2.style.margin = '1rem 1rem 1rem 1rem';
  title2.style.padding = '4rem 1rem 1rem 2rem';

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Proin eget augue sed ex tempor convallis id nec leo. Quisque at ornare quam, vitae eleifend mi. Etiam euismod eros malesuada neque tincidunt feugiat convallis a magna. Cras et quam id felis sodales pulvinar. Nullam rutrum tortor ac diam pulvinar, vitae consequat nunc feugiat. Sed posuere justo finibus justo iaculis lacinia. Pellentesque vitae ligula nisl. Etiam dapibus nulla vel sem elementum, ac cursus purus faucibus. Nulla non sodales orci. Proin molestie in enim faucibus maximus. Morbi magna magna, tempus vitae sodales sed, scelerisque sit amet ligula.';
  paragraph2.style.textAlign = 'center';
  paragraph2.style.margin = '1rem 2rem 6rem 2rem';
  paragraph2.style.padding = '1rem 2rem 7rem 1rem';

  document.body.appendChild(image2);
  document.body.appendChild(title2);
  document.body.appendChild(paragraph2);
  document.body.insertBefore(image2, footerTag);
  document.body.insertBefore(title2, footerTag);
  document.body.insertBefore(paragraph2, footerTag);

  const image3 = document.createElement('img');
  image3.setAttribute('src', 'images/blog-3.jpg');
  image3.style.cssFloat = 'left';
  image3.style.margin = '1rem 1rem 1rem 1rem';
  image3.style.padding = '1rem 2rem 1rem 5rem';

  const title3 = document.createElement('h2');
  title3.textContent = 'Traveling with your dog';
  title3.style.color = '#283e60';
  title3.style.textAlign = 'center';
  title3.style.margin = '1rem 1rem 1rem 1rem';
  title3.style.padding = '4rem 1rem 1rem 2rem';

  const paragraph3 = document.createElement('p');
  paragraph3.textContent = 'Proin eget augue sed ex tempor convallis id nec leo. Quisque at ornare quam, vitae eleifend mi. Etiam euismod eros malesuada neque tincidunt feugiat convallis a magna. Cras et quam id felis sodales pulvinar. Nullam rutrum tortor ac diam pulvinar, vitae consequat nunc feugiat. Sed posuere justo finibus justo iaculis lacinia. Pellentesque vitae ligula nisl. Etiam dapibus nulla vel sem elementum, ac cursus purus faucibus. Nulla non sodales orci. Proin molestie in enim faucibus maximus. Morbi magna magna, tempus vitae sodales sed, scelerisque sit amet ligula.';
  paragraph3.style.textAlign = 'center';
  paragraph3.style.margin = '1rem 2rem 6rem 2rem';
  paragraph3.style.padding = '1rem 2rem 7rem 1rem';


  document.body.appendChild(image3);
  document.body.appendChild(title3);
  document.body.appendChild(paragraph3);
  document.body.insertBefore(image3, footerTag);
  document.body.insertBefore(title3, footerTag);
  document.body.insertBefore(paragraph3, footerTag);
}

/* form page */

/*
form.getElementsById('submit');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('form submitted');
});






/*

form.getElementsById('alertPop');

form.addEventListener('alertPop', function(event) {
  event.preventDefault();
  alert('form submitted');
});

*/



/* this is for console log all the answers*/
/*
const submitButton = document.getElementsById('submitPop');
submitButton.addEventListener('submit', function(event) {
  event.preventDefault();
  const answers = document.getElementById('applicantName');
  console.log(answers.value);
});
*/


/*
const form = document.getElementsByTagName('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('form submitted');
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const answers = document.getElementById('full-name');
  const ans = document.getElementById('email');
  console.log(answers.value + ans.value);
});
*/



/*
  const next = document.getElementById('submitPop');
    next.addEventListener('click', function() {
     console.log('Name: ' + document.getElementById('applicantName').value);
     console.log('Email: ' + document.getElementById('applicantEmail').value);
     console.log('Address: ' + document.getElementById('applicantAddress').value);
     console.log('City: ' + document.getElementById('applicantCity').value);
     console.log('State: ' + document.getElementById('applicantState').value);
     console.log('Zip Code: ' + document.getElementById('applicantZipcode').value);
     let checkbox = document.querySelector('radio').value;
     console.log('Yes or No: ' + checkbox.value);
  });
*/



const next =  document.getElementById('submitPop');
  next.addEventListener('click', function() {
const allAnswers = [['Name: ' + document.getElementById('applicantName').value], ['Email: ' + document.getElementById('applicantEmail').value], ['Address: ' + document.getElementById('applicantAddress').value],['City: ' + document.getElementById('applicantCity').value], ['State: ' + document.getElementById('applicantState').value], ['Zip Code: ' + document.getElementById('applicantZipcode').value], ['Yes or No: ' + document.getElementById('checkboxYes').checked],  ['Pick Up Location: ' + document.getElementById('checkboxLocation').value], ['True is to buy Lucas: ' + document.getElementById('lucas').checked], ['True is to buy Duffy: ' + document.getElementById('duffy').checked]];
console.log (allAnswers);
});



const submit = document.getElementById('submitPop');
submit.addEventListener('click', function() {
  event.preventDefault();
  alert('Thank you. The form information has been received.');
});
