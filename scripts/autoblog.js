// Assignment 8

// get section w/ ID 'blog-page' (blog entry containter). Assign it a variable.
let intro = document.getElementById('blog-page');

//Blog Entries BEGIN
//ENTRY 1

//create article w/ class 'post'
let post1 = document.createElement('article');
post1.setAttribute('class', 'post')
// document.body.appendChild(post1); //append to body (commented out for JS automation).
// intro.appendChild(post1);

//create image w/ src images/blog-1.jpg
let img01 = document.createElement('img');
img01.setAttribute('src', 'images/blog-1.jpg')
img01.setAttribute('alt', 'woman sitting with her arm around her black shepard enjoying the grand canyon')
img01.setAttribute('width', 275)
img01.setAttribute('height', 260)
// document.body.appendChild(img01); //append to post1 (commented out for JS automation).
// post1.appendChild(img01);

//create div (blog text container)
let blogCopyContainer1 = document.createElement('div');
// document.body.appendChild(blogCopyContainer1); //append to post1 (commented out for JS automation).
// post1.appendChild(blogCopyContainer1);

//create blog entry title
let entryTitle1 = document.createElement('h4');
entryTitle1.textContent = 'Traveling With Your Dog';
// document.body.appendChild(entryTitle1); //append to blogCopyContainer1 (commented out for JS automation).
// blogCopyContainer1.appendChild(entryTitle1); //append to blogCopyContainer1 (commented out for JS automation).

//create blog body copy
let entryCopy1 = document.createElement('p');
entryCopy1.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.';
// document.body.appendChild(entryCopy1); //append to blogCopyContainer1 (commented out for JS automation).
// blogCopyContainer1.appendChild(entryCopy1);  //append to blogCopyContainer1 (commented out for JS automation).

//ENTRY 2

//create article w/ class 'post'
let post2 = document.createElement('article');
post2.setAttribute('class', 'post')

//create image w/ src images/blog-2.jpg
let img02 = document.createElement('img');
img02.setAttribute('src', 'images/blog-2.jpg')
img02.setAttribute('alt', 'four well-behaved dogs sit watching their dog walker enjoying the grand canyon')
img02.setAttribute('width', 275)
img02.setAttribute('height', 260)

//create div (blog text container)
let blogCopyContainer2 = document.createElement('div');

//create blog entry title
let entryTitle2 = document.createElement('h4');
entryTitle2.textContent = 'How To Walk Multiple Dogs';

//create blog body copy
let entryCopy2 = document.createElement('p');
entryCopy2.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.';

//ENTRY 3

//create article w/ class 'post'
let post3 = document.createElement('article');
post3.setAttribute('class', 'post')

//create image w/ src images/blog-3.jpg
let img03 = document.createElement('img');
img03.setAttribute('src', 'images/blog-3.jpg')
img03.setAttribute('alt', 'a dog and its owner play fetch at sunset')
img03.setAttribute('width', 275)
img03.setAttribute('height', 260)

//create div (blog text container)
let blogCopyContainer3 = document.createElement('div');

//create blog entry title
let entryTitle3 = document.createElement('h4');
entryTitle3.textContent = 'Teach Your Dog To Fetch!';

//create blog body copy
let entryCopy3 = document.createElement('p');
entryCopy3.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui of cae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.';
//Blog Entries END



// Blog objects. 1 object per blog post.
/* instructor comment:
A simpler method of doing this would be to put the text or img url directly into your array of objects ( see example below ). Then in your for() loop you can create / append the elements directly. This would cut down on the length of your code quite a bit.

const blogObjects = [
    { post: "sdfsdfsdfsdf", image: "img/url/here", title: "title"}
    { post: "sdfsdfsdfsdf", image: "img/url/here", title: "title"}
    { post: "sdfsdfsdfsdf", image: "img/url/here", title: "title"}
];
*/
const blogObject1 = {
  post: post1,
  image: img01,
  copyContainer: blogCopyContainer1,
  title: entryTitle1,
  bodyCopy: entryCopy1,
};

const blogObject2 = {
  post: post2,
  image: img02,
  copyContainer: blogCopyContainer2,
  title: entryTitle2,
  bodyCopy: entryCopy2,
};
const blogObject3 = {
  post: post3,
  image: img03,
  copyContainer: blogCopyContainer3,
  title: entryTitle3,
  bodyCopy: entryCopy3,
};

// Blog objects listed in an array (for loop)
//consider placing blogObject contents inside your array, objArray. See instructor outline below.

/*
const blogPosts = [
   {
      // post 1
   },
   {
      // post 2
   },
   {
      // post 3
   }
]
*/
const objArray = [blogObject1, blogObject2, blogObject3];

// Loop (i counter designates which blogObject)
for (i = 0; i < 3; i++) {
  //post container (article) from object[i] nests under section 'intro'
  document.body.appendChild(objArray[i].post);
  intro.appendChild(objArray[i].post);
  //blogObject[i] image nests under blogObject[i] post container (article)
  document.body.appendChild(objArray[i].image);
  objArray[i].post.appendChild(objArray[i].image);
  //blogObject[i] copyContainer nests under blogObject[i] post container (article)
  document.body.appendChild(objArray[i].copyContainer);
  objArray[i].post.appendChild(objArray[i].copyContainer);
  //blogObject[i] title (h4) appends to objArray[i].copyContainer
  document.body.appendChild(objArray[i].title);
  objArray[i].copyContainer.appendChild(objArray[i].title);
  //blogObject[i] bodyCopy (<p>) appends to objArray[i].copyContainer
  document.body.appendChild(objArray[i].bodyCopy);
  objArray[i].copyContainer.appendChild(objArray[i].bodyCopy);
};



/*anatomy of a blog post (for loop breakdown):
create a post container article, append it to intro section
create image, append it to article
create blogCopyContainer div, append it to article
create blog post title h4, append it to blogCopyContainer
create paragraph, append it to blogCopyContainer
*/
