let feeTotal = 0;

// Alert when clicking on dog picture
function alertDogInfo(name, breed, adoptionFee) {
  let txt =
  'Name: ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + adoptionFee;
  alert(txt);
}

// Alert when clicking adopt button
function addToTotal(adoptionFee) {
  feeTotal = feeTotal + adoptionFee;
  alert('Adoption fees total: $' + feeTotal);
}

// Create blog objects
const blogEntry1 = {
  title : 'Traveling with your dog',
  imageLocation : './images/blog-1.jpg',
  content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

const blogEntry2 = {
  title : 'How to walk multiple dogs',
  imageLocation : './images/blog-2.jpg',
  content : 'Suspendisse sed nisi lacus sed viverra tellus. In massa tempor nec feugiat nisl pretium. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum a. Adipiscing diam donec adipiscing tristique risus. Tincidunt augue interdum velit euismod. In nibh mauris cursus mattis molestie a. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Egestas purus viverra accumsan in nisl nisi scelerisque. Vel pretium lectus quam id leo in.'
};

const blogEntry3 = {
  title : 'Teach your dog to play fetch!',
  imageLocation : './images/blog-3.jpg',
  content : 'Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Mauris augue neque gravida in fermentum. Consectetur a erat nam at lectus urna duis convallis convallis. Egestas integer eget aliquet nibh praesent tristique magna. Pharetra vel turpis nunc eget lorem. Libero enim sed faucibus turpis. Tristique risus nec feugiat in fermentum. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor.'
};

//Create an array of blog objects
const blogEntries = [blogEntry1, blogEntry2, blogEntry3];

function populateBlog() {
  //Get blog container section
  const blogContainer = document.getElementsByClassName('main-blog-container')[0];

  for (let i = 0; i < blogEntries.length; i += 1) {
    //Create article and elements from blogEntries array, and append to blog.html
    const blogArticle = document.createElement('article');
    blogArticle.setAttribute('class', 'blog-entry');
    blogContainer.appendChild(blogArticle);

    const blogImage = document.createElement('img');
    blogImage.setAttribute('class', 'blog-image');
    blogImage.src= blogEntries[i].imageLocation;
    blogImage.alt=' ';
    blogArticle.appendChild(blogImage);

    const blogTitle = document.createElement('h2');
    blogTitle.setAttribute('class', 'blog-title');
    blogTitle.textContent = blogEntries[i].title;
    blogArticle.appendChild(blogTitle);

    const blogContent = document.createElement('p');
    blogContent.setAttribute('class', 'blog-content');
    blogContent.textContent = blogEntries[i].content;
    blogArticle.appendChild(blogContent);
  }
}

// Function declaration for submit listener
function submissionAlert(e) {
  e.preventDefault();
  alert('Thank you. The form information has been received.');
}

//Listener for page load
document.addEventListener("DOMContentLoaded", function() {
  populateBlog();
});

//Listener for checkout submit button
document.getElementById("checkout-form").addEventListener("submit", submissionAlert);
