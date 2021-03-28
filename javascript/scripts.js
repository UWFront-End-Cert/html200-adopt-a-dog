//console.log('it is totally working');

function dogInfo(name,breed,price) {
  //info = name + breed + price;
  info = `You can adopt ${name}, a ${breed}, for ${price}`;
  //info = 'Hi there!';
  alert(info);
}

let adoptTotal = 0;
let dogNum = 0

//a simple way of doing it
function total() {
  adoptTotal += 123.45;
  dogNum += 1;
  result = `With ${dogNum} dog(s) in your cart, your total is $${adoptTotal}`;
  alert(result);
}

//practicing an elaborate way of summarizing cart contents
let cartContents = [];
let adoptionTotal = 0;

function cartSummary(name) {
  cartContents.push(name); //need to figure out a way to prevent same dog from being added to cart twice
  let cartList = cartContents.join(', ');
  adoptionTotal += 123.45;
  result = `With ${name} added to the cart, your total is $${Number(adoptionTotal).toFixed(2)}. In your cart: ${cartList}`;

  alert(result);
}

const blogPageTitle = 'Adopt a Dog: Blog';

//only run this code for the blog page
if (blogPageTitle == document.title) {
  const top = document.createElement('div');
  top.setAttribute('class', 'grid-top');
  top.setAttribute('id', 'main-content');
  document.body.appendChild(top);

  mainPageTitle = document.createElement('h2');
  mainPageTitle.textContent = 'Adoptadog Blog';
  top.appendChild(mainPageTitle);

  blogEntry = document.createElement('article');
  blogEntry.setAttribute('class', 'blog');
  top.appendChild(blogEntry);

  blogImg = document.createElement('img');
  blogImg.setAttribute('src', 'images/blog-1.jpg');
  blogImg.setAttribute('class', 'left-img');
  blogImg.setAttribute('alt', 'a girl looks out over a canyon with her arm around a black dog');
  blogEntry.appendChild(blogImg);

  blurb = document.createElement('div');
  blurb.setAttribute('class', 'blurb-text');
  blogEntry.appendChild(blurb);

  blogTitle = document.createElement('h3');
  blogTitle.textContent = 'Traveling With Your Dog';
  blurb.appendChild(blogTitle);

  blogP1 = document.createElement('p');
  blogP1.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';
  blurb.appendChild(blogP1);

  blogP2 = document.createElement('p');
  blogP2.textContent = 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.';
  blurb.appendChild(blogP2);
}

//setting up necessary variable/arrays
const pageComponent = ['top','middle','bottom'];
const blogComponent = ['imgSrc','imgAlt','blogTitle','textContent'];

let imgSrcArr = ['blog-1.jpg','blog-2.jpg','blog-3.jpg'];
let imgAltArr = ['a girl looks out over a canyon with her arm around a black dog','four dogs on leads sit in a city square looking eagerly at someone holding the other end of the leash out of the frame','the silhouette of a girl raising a ball to toss for a sitting, smiling dog in front of a deep orange twilight sky'];
let titleArr = ['Traveling With Your Dog','How To Walk Multiple Dogs','Teach Your Dog to Fetch!'];
let textContentArr = ['Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.','Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'];
// let blogComponents = [
//   {
//     title: 'blog-title',
//     image: 'blog-pic',
//     p1: 'blog-text'
//   },
//
// ];

// create an array of blog entries (blogList)
// each blog entry will contain an array of components: title, image, content
// step through loops that append blog elements for each component and entry
// set style attributes so they display correctly
