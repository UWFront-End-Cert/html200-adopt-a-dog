// Refactor the blog to generate the blog posts dynamically from JavaScript
const articleCon = document.getElementById('blog-content');

const arrPosts =
[{
  image: './images/blog-1.jpg',
  imgAlt: 'A person and their black dog overlooking a canyon',
  title: 'Traveling With Your Dog',
  pOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  pTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
},
{
  image: './images/blog-2.jpg',
  imgAlt: 'Four dogs of different breeds on leashes, sitting down',
  title: 'How To Walk Multiple Dogs',
  pOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  pTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
},
{
  image: './images/blog-3.jpg',
  imgAlt: 'Sihlouettes of girl with a ball in her hand and a dog sitting down, looking at the ball',
  title: 'Teach Your Dog To Fetch!',
  pOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
  pTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
}];

for (let i = 0; i < arrPosts.length; i++) {
  // creates a section
  const sec = document.createElement('section');
  sec.setAttribute('class', 'sec');

  // creates an img
  let blogImg = document.createElement('img');
  blogImg.src = arrPosts[i].image;
  blogImg.alt = arrPosts[i].imgAlt;
  // img append
  sec.appendChild(blogImg);

  // creates a div
  let blogDiv = document.createElement('div');

  let blogTitle = document.createElement('h3');
  blogTitle.innerHTML = arrPosts[i].title;
  // h3 header
  blogDiv.appendChild(blogTitle);

  let blogParaOne = document.createElement('p');
  blogParaOne.innerHTML = arrPosts[i].pOne;
  // p paragraph append
  blogDiv.appendChild(blogParaOne);

  let blogParaTwo = document.createElement('p');
  blogParaTwo.innerHTML = arrPosts[i].pTwo;
  // p paragraph append
  blogDiv.appendChild(blogParaTwo);

  // div append
  sec.appendChild(blogDiv);
  // appenc sec to the article
  articleCon.appendChild(sec);
};
