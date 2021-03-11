// creating first blog post

const figureOne = document.createElement('figure');
figureOne.setAttribute('class', 'blog-image');


const imageOne = document.createElement('img');
imageOne.setAttribute('src', 'images/blog-1.jpg');
imageOne.setAttribute('alt', 'Dog and owner hiking');

figureOne.appendChild(imageOne);

const articleOne = document.createElement('article');
articleOne.setAttribute('class', 'blog');

const headerOne = document.createElement('h2');
headerOne.textContent = 'Traveling With Your Dog';


const paragraphOne = document.createElement('p');
paragraphOne.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';


const paragraphTwo = document.createElement('p');
paragraphTwo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

articleOne.appendChild(headerOne);
articleOne.appendChild(paragraphOne);
articleOne.appendChild(paragraphTwo);

const blogPage = document.createElement('div');
blogPage.setAttribute('class', 'blog-page');

blogPage.appendChild(figureOne);
blogPage.appendChild(articleOne);

const container = document.getElementsByClassName('blog-wrapper');

console.log(container[0]);

const wrapper = container[0];
wrapper.appendChild(blogPage);

// blog post post two

const figureTwo = document.createElement('figure');
figureTwo.setAttribute('class', 'blog-image');

const imageTwo = document.createElement('img');
imageTwo.setAttribute('src', 'images/blog-2.jpg');
imageTwo.setAttribute('alt', 'Dog walker walking four dogs');

figureTwo.appendChild(imageTwo);

const articleTwo = document.createElement('article');
articleTwo.setAttribute('class', 'blog');

const secondHeader = document.createElement('h2');
secondHeader.textContent = 'How To Walk Multiple Dogs';

const secondParagraphOne = document.createElement('p');
secondParagraphOne.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

const secondParagraphTwo = document.createElement('p');
secondParagraphTwo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

articleTwo.appendChild(secondHeader);
articleTwo.appendChild(secondParagraphOne);
articleTwo.appendChild(secondParagraphTwo);

const blogPageTwo = document.createElement('div');
blogPageTwo.setAttribute('class', 'blog-page');


blogPageTwo.appendChild(figureTwo);
blogPageTwo.appendChild(articleTwo);

wrapper.appendChild(blogPageTwo);


// blog post three
const figureThree = document.createElement('figure');
figureThree.setAttribute('class', 'blog-image');

const imagethree = document.createElement('img');
imagethree.setAttribute('src', 'images/blog-3.jpg');
imagethree.setAttribute('alt', 'Owner playing fetch with dog');

figureThree.appendChild(imagethree);

const articleThree = document.createElement('article');
articleThree.setAttribute('class', 'blog');

const thirdHeader = document.createElement('h2');
thirdHeader.textContent = 'Teach Your Dog To Fetch';

const thirdParagraphOne = document.createElement('p');
thirdParagraphOne.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

const thirdParagraphTwo = document.createElement('p');
thirdParagraphTwo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam';

articleThree.appendChild(thirdHeader);
articleThree.appendChild(thirdParagraphOne);
articleThree.appendChild(thirdParagraphTwo);

const thirdBlogPost = document.createElement('div');
thirdBlogPost.setAttribute('class', 'blog-page');

thirdBlogPost.appendChild(figureThree);
thirdBlogPost.appendChild(articleThree);

wrapper.appendChild(thirdBlogPost);





 // for (i = 0; i < content.length; i++) {
 //   console.log(content[i]);
 //   content[i].textContent = 'eniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
 //
 // }
