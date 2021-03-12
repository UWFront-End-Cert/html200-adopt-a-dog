// Refactor the blog to generate the blog posts dynamically from JavaScript
const articleCon = document.getElementById('blog-content');

const post1 = [
  './images/blog-1.jpg',
  'A person and their black dog overlooking a canyon',
  'Traveling With Your Dog',
  'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
];

const post2 = [
  './images/blog-2.jpg',
  'Four dogs of different breeds on leashes, sitting down',
  'How To Walk Multiple Dogs',
  'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
];

const post3 = [
  './images/blog-3.jpg',
  'Sihlouettes of girl with a ball in her hand and a dog sitting down, looking at the ball',
  'Teach Your Dog To Fetch!',
  'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
];

const posts = [
  'post1',
  'post2',
  'post3'
];

for (let i = 0; i < posts.length; i++) {
  if (posts[i] === posts[0]) {
    // creates a section
    const sec = document.createElement('section');
    sec.setAttribute('class', 'sec');
    // creates an img
    const blogImg = document.createElement('img');
    // creates a div
    const blogDiv = document.createElement('div');
    // creates an h3 header
    const blogH3 = document.createElement('h3');
    // creates a paragraph
    const blogP = document.createElement('p');
    const blogP2 = document.createElement('p');

    // sets the blogImg src and alt
    blogImg.src = post1[0];
    blogImg.alt = post1[1];

    // img append
    sec.appendChild(blogImg);

    // sets the header
    const title = document.createTextNode(post1[2]);
    // h3 header
    blogH3.appendChild(title);
    blogDiv.appendChild(blogH3);

    // sets the paragraph
    const para = document.createTextNode(post1[3]);
    // p paragraph append
    blogP.appendChild(para);
    blogDiv.appendChild(blogP);
    const para2 = document.createTextNode(post1[4]);
    // p paragraph append
    blogP2.appendChild(para2);
    blogDiv.appendChild(blogP2);

    // div append
    sec.appendChild(blogDiv);
    // appenc sec to the article
    articleCon.appendChild(sec);
  }

  if (posts[i] === posts[1]) {
    // creates a section
    const sec = document.createElement('section');
    sec.setAttribute('class', 'sec');
    // creates an img
    const blogImg = document.createElement('img');
    // creates a div
    const blogDiv = document.createElement('div');
    // creates an h3 header
    const blogH3 = document.createElement('h3');
    // creates a paragraph
    const blogP = document.createElement('p');
    const blogP2 = document.createElement('p');

    // sets the blogImg src and alt
    blogImg.src = post2[0];
    blogImg.alt = post2[1];

    // img append
    sec.appendChild(blogImg);

    // sets the header
    const title = document.createTextNode(post2[2]);
    // h3 header
    blogH3.appendChild(title);
    blogDiv.appendChild(blogH3);

    // sets the paragraph
    const para = document.createTextNode(post2[3]);
    // p paragraph append
    blogP.appendChild(para);
    blogDiv.appendChild(blogP);
    const para2 = document.createTextNode(post2[4]);
    // p paragraph append
    blogP2.appendChild(para2);
    blogDiv.appendChild(blogP2);

    // div append
    sec.appendChild(blogDiv);
    // appenc sec to the article
    articleCon.appendChild(sec);
  }

  if (posts[i] === posts[2]) {
    // creates a section
    const sec = document.createElement('section');
    sec.setAttribute('class', 'sec');
    // creates an img
    const blogImg = document.createElement('img');
    // creates a div
    const blogDiv = document.createElement('div');
    // creates an h3 header
    const blogH3 = document.createElement('h3');
    // creates a paragraph
    const blogP = document.createElement('p');
    const blogP2 = document.createElement('p');

    // sets the blogImg src and alt
    blogImg.src = post3[0];
    blogImg.alt = post3[1];

    // img append
    sec.appendChild(blogImg);

    // sets the header
    const title = document.createTextNode(post3[2]);
    // h3 header
    blogH3.appendChild(title);
    blogDiv.appendChild(blogH3);

    // sets the paragraph
    const para = document.createTextNode(post3[3]);
    // p paragraph append
    blogP.appendChild(para);
    blogDiv.appendChild(blogP);
    const para2 = document.createTextNode(post3[4]);
    // p paragraph append
    blogP2.appendChild(para2);
    blogDiv.appendChild(blogP2);

    // div append
    sec.appendChild(blogDiv);
    // appenc sec to the article
    articleCon.appendChild(sec);
  }
}
