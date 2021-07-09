const container = document.getElementById('headline');
const headline = document.createElement('h1');
headline.textContent = 'Adoptadog Blog';
container.appendChild(headline);

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


const blogContainer1 = document.getElementById('blog-container1');
const imageDiv1 = document.createElement('div');
imageDiv1.classList.add("b-image");
blogContainer1.appendChild(imageDiv1);
const image1 = document.createElement('img');
image1.src = images.image1;
imageDiv1.appendChild(image1);

const blogContents1 = document.createElement('div');
blogContents1.classList.add("contents");
blogContainer1.appendChild(blogContents1);
const blogTitle1 = document.createElement('h2');
blogTitle1.textContent = headlines.h1;
blogContents1.appendChild(blogTitle1);

const parOne = document.createElement('p');
parOne.textContent = blogs.blog1;
blogContents1.appendChild(parOne);

const parTwo = document.createElement('p');
parTwo.textContent = blogs.blog2;
blogContents1.appendChild(parTwo);


//*********2nd blog */
const blogContainer2 = document.getElementById('blog-container2');
const imageDiv2 = document.createElement('div');
imageDiv2.classList.add("b-image");
blogContainer2.appendChild(imageDiv2);
const image2 = document.createElement('img');
image2.src = images.image2;
imageDiv2.appendChild(image2);

const blogContents2 = document.createElement('div');
blogContents2.classList.add("contents");
blogContainer2.appendChild(blogContents2);
const blogTitle2 = document.createElement('h2');
blogTitle2.textContent = headlines.h2;
blogContents2.appendChild(blogTitle2);

const blog2ParOne = document.createElement('p');
blog2ParOne.textContent = blogs.blog1;
blogContents2.appendChild(blog2ParOne);

const blog2ParTwo = document.createElement('p');
blog2ParTwo.textContent = blogs.blog2;
blogContents2.appendChild(blog2ParTwo);


//*********3rd blog */
const blogContainer3 = document.getElementById('blog-container3');
const imageDiv3 = document.createElement('div');
imageDiv3.classList.add("b-image");
blogContainer3.appendChild(imageDiv3);
const image3 = document.createElement('img');
image3.src = images.image3;
imageDiv3.appendChild(image3);

const blogContents3 = document.createElement('div');
blogContents3.classList.add("contents");
blogContainer3.appendChild(blogContents3);
const blogTitle3 = document.createElement('h2');
blogTitle3.textContent = headlines.h3;
blogContents3.appendChild(blogTitle3);

const blog3ParOne = document.createElement('p');
blog3ParOne.textContent = blogs.blog1;
blogContents3.appendChild(blog3ParOne);

const blog3ParTwo = document.createElement('p');
blog3ParTwo.textContent = blogs.blog2;
blogContents3.appendChild(blog3ParTwo);
