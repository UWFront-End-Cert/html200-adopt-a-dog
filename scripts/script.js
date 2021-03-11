/* Shows the dog info in an alert. */
function showDogInfo(dogName, dogBreed, adoptionFee) {
  let infoMessage = 'Name: ' + dogName + '\nBreed: ' + dogBreed + '\nAdoption Fee: ' + adoptionFee;
  alert(infoMessage);
}

/* Add the dog's adoption fee to the total price. */
let totalPrice = 0;
function addDogToTotal(adoptionFee) {
  totalPrice += adoptionFee;
  alert('Total cost: ' + totalPrice);
}

addBlogs();

function addBlogs() {
  // Create individual elements
  const blog = document.createElement('article');
  blog.className = 'blog';

  const blogImage = document.createElement('img');
  blogImage.src = './images/blog-3.jpg';
  blogImage.alt = 'another dog picture';

  const blogContents = document.createElement('div');
  blogContents.className = 'blog-text';
  const blogTitle = document.createElement('h3');
  blogTitle.textContent = 'Another blog post title';
  const blogText1 = document.createElement('p');
  blogText1.textContent = 'Lorem ipsum one';
  const blogText2 = document.createElement('p');
  blogText2.textContent = 'Lorem ipsum two';

  // Link the elements together
  blogContents.appendChild(blogTitle);
  blogContents.appendChild(blogText1);
  blogContents.appendChild(blogText2);

  blog.appendChild(blogImage);
  blog.appendChild(blogContents);

  const section = document.getElementsByTagName('section')[0];
  section.appendChild(blog);

  console.log();
}
