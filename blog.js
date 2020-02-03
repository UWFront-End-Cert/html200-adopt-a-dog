const blog = [
{
  title:'Travel With Your Dog',
  paragraph:'test test test test test test',
  imgSource: 'images/blog-1.jpg',
  altText: 'person with dog looking at canyon',
},
 {
  title: 'How to Walk Multiple Dogs',
  paragraph: 'test test test test test test',
  imgSource: 'images/blog-2.jpg',
  altText: 'multiple dogs on a leash',
},
{
  title:'Teach Your Dog to Fetch',
  paragraph: 'test test test test test test',
  imgSource: 'images/blog-3.jpg',
  alText: 'dark lite image of a person and a dog with a ball',
}
];

for (let i=0; i < blog.length; i ++) {
  const blog_post = blog[i];
  const newDiv = document.createElement('div');
  newDiv.className ="main-content-blog";
  const pic = document.createElement('IMG');
  pic.className = 'main-content-image';
  pic.setAttribute('src', blog_post.imgSource);
  pic.setAttribute('alt', blog_post.altText);
  newDiv.appendChild(pic);
  const textDiv = document.createElement ('div');
  textDiv.setAttribute('class', 'main-content-text');
  const title = document.createElement('h3');
  title.textContent = blog_post.title;
  textDiv.appendChild (title);
  const paragraph = document.createElement('p');
  paragraph.textContent = blog_post.paragraph;
  textDiv.appendChild (paragraph);
  newDiv.appendChild (textDiv);
  document.body.appendChild(newDiv);
}
