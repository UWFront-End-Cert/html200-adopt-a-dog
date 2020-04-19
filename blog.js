const blog = document.querySelector('#blog');
const blogContent = [{
    title: 'Traveling With Your Dogs',
    blogTextOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident suscipit consequuntur a, corporis magnam nemo. Cupiditate aut at aliquid modi perspiciatis aperiam enim animi corporis! Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    blogTextTwo: 'Provident suscipit consequuntur a, corporis magnam nemo. Cupiditate aut at aliquid modi perspiciatis aperiam enim animi corporis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: './images/blog-1.jpg'
  },
  {
    title: 'How To Walk Multiple Dogs',
    blogTextOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident suscipit consequuntur a, corporis magnam nemo. Cupiditate aut at aliquid modi perspiciatis aperiam enim animi corporis! Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    blogTextTwo: 'Provident suscipit consequuntur a, corporis magnam nemo. Cupiditate aut at aliquid modi perspiciatis aperiam enim animi corporis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: './images/blog-2.jpg'
  },
  {
    title: 'Teach Your Dog To Fetch!',
    blogTextOne: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident suscipit consequuntur a, corporis magnam nemo. Cupiditate aut at aliquid modi perspiciatis aperiam enim animi corporis! Consectetur tempora magnam optio quibusdam! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    blogTextTwo: 'Provident suscipit consequuntur a, corporis magnam nemo. Cupiditate aut at aliquid modi perspiciatis aperiam enim animi corporis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: './images/blog-3.jpg'
  }
];

for (let i = 0; i < blogContent.length; i++) {
  const blogItem = blogContent[i];

  //creates a div with a class of blog-box
  const blogBoxDiv = document.createElement('div');
  blogBoxDiv.setAttribute('class', 'blog-box');

  //creates an img tag and sets src
  const div = document.createElement('div');
  div.setAttribute('class', 'img-box')
  const blogImg = document.createElement('img');
  blogImg.setAttribute('src', blogItem.image);

  //creates a div with a class of blog-content
  const blogContentDiv = document.createElement('div');
  blogContentDiv.setAttribute('class', 'blog-content');

  //creates a h3 heading and sets the title
  const blogContentTitle = document.createElement('h3');
  blogContentTitle.textContent = blogItem.title;

  //create p tags and sets the blog text
  const blogText1 = document.createElement('p');
  blogText1.textContent = blogItem.blogTextOne;
  const br = document.createElement('br');
  const blogText2 = document.createElement('p');
  blogText2.textContent = blogItem.blogTextTwo;


  blog.appendChild(blogBoxDiv);
  blogBoxDiv.appendChild(div);
  div.appendChild(blogImg);
  blogBoxDiv.appendChild(blogContentDiv);
  blogContentDiv.appendChild(blogContentTitle);
  blogContentDiv.appendChild(blogText1);
  blogContentDiv.appendChild(br);
  blogContentDiv.appendChild(blogText2);
}