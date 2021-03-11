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

const allBlogData = {
  blogs: [
    {
      imageSource: './images/blog-3.jpg',
      imageAltText: 'another dog picture',
      title: 'Another Blog post Title',
      paragraphs: [
        'Lorem ipsum one',
        'Lorem ipsum two'
      ]
    }
  ]
}

addBlogs();

function addBlogs() {
  const blog = createBlog(allBlogData.blogs[0]);

  const section = document.getElementsByTagName('section')[0];
  section.appendChild(blog);
}

function createBlog(blogData) {
  // 1. Create individual elements
  const blog = document.createElement('article');
  blog.className = 'blog';

  const blogImage = document.createElement('img');
  blogImage.src = blogData.imageSource;
  blogImage.alt = blogData.imageAltText;

  const blogContents = document.createElement('div');
  blogContents.className = 'blog-text';
  const blogTitle = document.createElement('h3');
  blogTitle.textContent = blogData.title;
  const blogText1 = document.createElement('p');
  blogText1.textContent = blogData.paragraphs[0];
  const blogText2 = document.createElement('p');
  blogText2.textContent = blogData.paragraphs[1];

  // 2. Link the elements together
  blogContents.appendChild(blogTitle);
  blogContents.appendChild(blogText1);
  blogContents.appendChild(blogText2);

  blog.appendChild(blogImage);
  blog.appendChild(blogContents);

  return blog;
}
