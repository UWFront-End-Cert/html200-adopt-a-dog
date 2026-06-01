/*-------------------------------------------------------------
Course Project Week 7 - Refactor Blog Page
Reference Lesson07b Creating a Form Dynamically video
--------------------------------------------------------------*/
//create array of the blog post
const blogPosts = [
  {
    title: 'Traveling With Your Dog',
    image: 'images/blog-1.jpg',
    alt: 'a woman hug a black dog',
    text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam'
  },
  {
    title: 'How To Walk Multiple Dogs',
    image: 'images/blog-2.jpg',
    alt: 'four dogs with leash on sitting with their owner',
    text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam'
  },
  {
    title: 'Teach Your Dog To Fetch',
    image: 'images/blog-3.jpg',
    alt: 'a dog play a ball with a girl',
    text1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    text2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam'
  }
];

//get the html element by ID (blog-posts) and store it to variable blogContainer
const blogContainer = document.getElementById('blog-posts');

//loop through blogPosts array. For each blog, builds the article, figure, image, text
//then insert it into the page
for (let i = 0; i < blogPosts.length; i++) {
  const post = blogPosts[i];
  //create article
  const article = document.createElement('article');
  //add a css class (blog-entry) to the element
  article.classList.add('blog-entry');
  //create figure element
  const figure = document.createElement('figure');
  //create image element
  const img = document.createElement('img');
  //assign src to the post.image
  img.src = post.image;
  //assign alt to the post.alt
  img.alt = post.alt;
  //append img to the figure
  figure.appendChild(img);
  //create div element
  const asideDiv = document.createElement('div');
  //add a css class (aside-container) to the element
  asideDiv.classList.add('aside-container');
  //create header
  const h2 = document.createElement('h2');
  //assign the text contents to post.title
  h2.textContent = post.title;
  //create paragraph 
  const p1 = document.createElement('p');
  //assign the text contents to post.text1
  p1.textContent = post.text1;
  //create second paragraph
  const p2 = document.createElement('p');
  //assign the text contents to post.text2
  p2.textContent = post.text2;
  //append h2, p1, p2 to the asideDiv (aside-container)
  asideDiv.appendChild(h2);
  asideDiv.appendChild(p1);
  asideDiv.appendChild(p2);
  //append figure and asideDiv to the article
  article.appendChild(figure);
  article.appendChild(asideDiv);
  //append article to the blogContainer
  blogContainer.appendChild(article);
}
