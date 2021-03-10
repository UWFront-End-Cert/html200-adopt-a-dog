const container = document.getElementById('blogContainer');
const el = document.createElement('h1');
el.textContent = 'Adoptadog Blog';
// console.log(el);


const blogImg = document.createElement('img');
blogImg.src='./images/blog-1.jpg';

const blogTitle = document.createElement('h2');
blogTitle.textContent = 'Traveling With Your Dog';

const blogText = document.createElement('p');
blogText.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';

blogContainer.appendChild(el);
blogContainer.appendChild(blogImg);
blogContainer.appendChild(blogTitle);
blogContainer.appendChild(blogText);
