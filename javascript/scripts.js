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

//~ASSIGNMENT 8 code~

// THE BLOG PAGE
// Pseudo-code plan:
// create an array of page sections
// each section will contain the components of a blog entry, i.e. <article>
// store content and attributes for blog entries in arrays, e.g. imgSrc, alt text, blog title, etc.
// step through loops that append elements of blog entries to parent element
// go back and set style attributes so they display correctly

//setting up necessary variables/objects
const pageSections = ['top','middle','bottom'];
//To add subsequent blog posts, add data to these arrays:
let imgSrcArr = ['blog-1.jpg','blog-2.jpg','blog-3.jpg'];
let imgAltArr = ['a girl looks out over a canyon with her arm around a black dog','four dogs on leads sit in a city square looking eagerly at someone holding the other end of the leash out of the frame','the silhouette of a girl raising a ball to toss for a sitting, smiling dog in front of a deep orange twilight sky'];
let titleArr = ['Traveling With Your Dog','How To Walk Multiple Dogs','Teach Your Dog to Fetch!'];
//Even though the stand-in Latin is the same for all blog posts, I put the text for each post into a nested array since in reality the text for each blog entry would vary in length and content
let textContentArr = [['Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.','Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'],['Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.','Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'],['Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.','Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.']];

const blogPageTitle = 'Adopt a Dog: Blog';
//only run this code for the blog page
if (blogPageTitle == document.title) {
  for (let i = 0; i < pageSections.length; i+=1) {
    //console.log(pageComponents[i]);
    let section = document.createElement('div');
    section.setAttribute('class', `grid-${pageSections[i]}`);
    section.setAttribute('id',`blog${i+1}`);

    if (pageSections[i] == 'top') {
      section.setAttribute('id', 'main-content');
      mainPageTitle = document.createElement('h2');
      mainPageTitle.textContent = 'Adoptadog Blog';
      section.appendChild(mainPageTitle);
    }
    console.log(section.getAttribute('id'));

    let entry = document.createElement('article');
    entry.setAttribute('class', 'blog');

    let blogImg = document.createElement('img');
    blogImg.setAttribute('src', `images/${imgSrcArr[i]}`);
    //console.log(blogImg.getAttribute('src'));
    blogImg.setAttribute('alt', imgAltArr[i]);
    //console.log(blogImg.getAttribute('alt'));
    blogImg.setAttribute('class', 'left-img');

    let blurb = document.createElement('div');
    blurb.setAttribute('class', 'blurb-text');

    let blogTitle = document.createElement('h3');
    blogTitle.textContent = titleArr[i];
    blurb.appendChild(blogTitle);

    for (j = 0; j < textContentArr[i].length; j+=1) {
      //console.log(`i = ${i}`);
      //console.log(`j = ${j}`);
      let text = document.createElement('p');
      text.textContent = textContentArr[i][j];
      blurb.appendChild(text);
    }

    entry.appendChild(blogImg);
    entry.appendChild(blurb);
    section.appendChild(entry);
    document.body.appendChild(section);
  }
}

// THE CHECKOUT PAGE
// Pseudo-code plan:
// specify a class for all form entries (including imputs, drop-down selections, and radio)
// use querySelectorAll to create an object of all form entries (NodeList)
// add event listener to generate alert when form submitted
// use for loop to step through NodeList console logging value associated with each node
// within loop, check whether input type is radio, and if so return whichever option is checked

const formValues = document.querySelectorAll('.form-entry');

document.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thank you. The form information has been received.');

  for (i = 0; i < formValues.length; i+=1) {
    if (formValues[i].type == 'radio') {
      let selection = formValues[i].checked;
      //console.log(selection);
      //console.log(formValues[i].value);
      if (selection == true) {
        let logOutput = `${formValues[i].name}: ${formValues[i].value}`;
        console.log(logOutput);
      }
    }
    else {
      let logOutput = `${formValues[i].name}: ${formValues[i].value}`;
      console.log(logOutput);
    }
  }
});
