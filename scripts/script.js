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
      imageSource: './images/blog-1.jpg',
      imageAltText: 'another dog picture',
      title: 'Another Blog post Title One',
      paragraphs: [
        'Lorem ipsum one',
        'Lorem ipsum two'
      ]
    },
    {
      imageSource: './images/blog-2.jpg',
      imageAltText: 'another dog picture',
      title: 'Another Blog post Title Two',
      paragraphs: [
        'Lorem ipsum one',
        'Lorem ipsum two'
      ]
    },
    {
      imageSource: './images/blog-3.jpg',
      imageAltText: 'another dog picture',
      title: 'Another Blog post Title Three',
      paragraphs: [
        'Lorem ipsum one',
        'Lorem ipsum two'
      ]
    }
  ]
}

addBlogs();

function addBlogs() {
  console.log('Creating blog elements');
  const blogsToAdd = [];
  for (let i = 0; i < allBlogData.blogs.length; i++) {
    const blog = createBlog(allBlogData.blogs[i]);
    blogsToAdd.push(blog);
  }

  console.log('Adding blog elements');
  const section = document.getElementsByTagName('section')[0];
  for (let i = 0; i < blogsToAdd.length; i++) {
    section.appendChild(blogsToAdd[i]);
  }
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

  const blogTexts = [];
  for (let i = 0; i < blogData.paragraphs.length; i++) {
    const blogText = document.createElement('p');
    blogText.textContent = blogData.paragraphs[i];
    blogTexts.push(blogText);
  }

  // 2. Link the elements together
  blogContents.appendChild(blogTitle);
  for (let i = 0; i < blogTexts.length; i++) {
    blogContents.appendChild(blogTexts[i]);
  }

  blog.appendChild(blogImage);
  blog.appendChild(blogContents);

  return blog;
}
