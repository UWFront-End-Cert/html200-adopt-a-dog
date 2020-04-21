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

// Populate blog.html content
function populateBlog() {
  //get blog container section
  const blogContainer = document.body.getElementsByClassName('main-blog-container');

  //create article and elements, and append to Blog
  const blogArticle = document.createElement('article');
  blogArticle.setAttribute('class', 'blog-entry');
  blogContainer.appendChild(blogArticle);
  // This variation also fails
  // getElementsByClassName('main-blog-container').appendChild(blogArticle);

  const blogImage = document.createElement('image');
  blogImage.setAttribute('class', 'blog-image');
  blogImage.src = './images/blog-1.jpg';
  blogArticle.appendChild(blogImage);

  const blogTitle = document.createElement('h2');
  blogTitle.setAttribute('class', 'blog-title');
  blogTitle.textContent = 'Test title';
  blogArticle.appendChild(blogTitle);

  const blogContent = document.createElement('p');
  blogContent.setAttribute('class', 'blog-content');
  blogContent.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';
  blogArticle.appendChild(blogContent);
}

document.addEventListener("DOMContentLoaded", function() {
  populateBlog();
});
