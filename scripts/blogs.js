
const header = document.getElementsByTagName('header')[0];
const title = document.createElement('div');
title.classList.add('title');
document.body.appendChild(title);
header.insertAdjacentElement("afterend", title);

const headline = document.createElement('h1');
headline.textContent = 'Adoptadog Blog';
title.appendChild(headline);

const images = {
    image1: 'images/blog-1.jpg',
    image2: 'images/blog-2.jpg',
    image3: 'images/blog-3.jpg'
}

const headlines = {
    h1: 'Traveling With Your Dog',
    h2: 'How To Walk Multiple Dogs',
    h3: 'Teach Your Dog To Fetch!'
}

const blogs = {

    blog1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem' +
    'quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium' +
    'hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium' +
    'faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',

    blog2: 'Uptiusd andesci qu nem aut vendion ectur? Debis que explaut laborenia que doluptur, con' + 
    'et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad' +
    'qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam' +
    'voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit' +
    'ulparume nonseca estorer spernam.'
}


const section1 = document.createElement('section');
document.body.appendChild(section1);
title.after(section1);

section1.classList.add('container');
const imageDiv1 = document.createElement('div');
imageDiv1.classList.add("b-image");

section1.appendChild(imageDiv1);
const image1 = document.createElement('img');
image1.src = images.image1;
imageDiv1.appendChild(image1);

const blogContents = document.createElement('div');
blogContents.classList.add("contents");
section1.appendChild(blogContents);
const blogTitle1 = document.createElement('h2');
blogTitle1.textContent = headlines.h1;
blogContents.appendChild(blogTitle1);

const parOneA = document.createElement('p');
parOneA.textContent = blogs.blog1;
blogContents.appendChild(parOneA);

const parTwoA = document.createElement('p');
parTwoA.textContent = blogs.blog2;
blogContents.appendChild(parTwoA);


//*********2nd blog */
const section2 = document.createElement('section');
document.body.appendChild(section2);
section1.after(section2);

section2.classList.add('container');
const imageDiv2 = document.createElement('div');
imageDiv2.classList.add("b-image");

section2.appendChild(imageDiv2);
const image2 = document.createElement('img');
image2.src = images.image2;
imageDiv2.appendChild(image2);

const blogContents2 = document.createElement('div');
blogContents2.classList.add("contents");
section2.appendChild(blogContents2);
const blogTitle2 = document.createElement('h2');
blogTitle2.textContent = headlines.h2;
blogContents2.appendChild(blogTitle2);

let parOneB = document.createElement('p');
parOneB.textContent = blogs.blog1;
section2.appendChild(parOneB);
blogTitle2.insertAdjacentElement("afterend", parOneB);

const parTwoB = document.createElement('p');
parTwoB.textContent = blogs.blog2;
blogContents2.appendChild(parTwoB);


//*********3rd blog */
const section3 = document.createElement('section');
document.body.appendChild(section3);
section2.insertAdjacentElement("afterend", section3);

section3.classList.add('container');
const imageDiv3 = document.createElement('div');
imageDiv3.classList.add("b-image");

section3.appendChild(imageDiv3);
const image3 = document.createElement('img');
image3.src = images.image3;
imageDiv3.appendChild(image3);

const blogContents3 = document.createElement('div');
blogContents3.classList.add("contents");
section3.appendChild(blogContents3);
const blogTitle3 = document.createElement('h2');
blogTitle3.textContent = headlines.h3;
blogContents3.appendChild(blogTitle3);

const parOneC = document.createElement('p');
parOneC.textContent = blogs.blog1;
blogContents3.appendChild(parOneC);
blogTitle3.insertAdjacentElement("afterend", parOneC);

const parTwoC = document.createElement('p');
parTwoC.textContent = blogs.blog2;
blogContents3.appendChild(parTwoC);

