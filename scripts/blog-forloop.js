const container = document.getElementById('blogContainer');
const el = document.createElement('h1');
el.textContent = 'Adoptadog Blog';

const blogImg = document.createElement('img');
blogImg.src='./images/blog-1.jpg';
const blogTitle = document.createElement('h2');
blogTitle.textContent = 'Traveling With Your Dog';
const blogText = document.createElement('p');
blogText.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';

const blogImg2 = document.createElement('img');
blogImg2.src='./images/blog-2.jpg';
const blogTitle2 = document.createElement('h2');
blogTitle2.textContent = 'How To Walk Multiple Dog';
const blogText2 = document.createElement('p');
blogText2.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';

const blogImg3 = document.createElement('img');
blogImg3.src='./images/blog-3.jpg';
const blogTitle3 = document.createElement('h2');
blogTitle3.textContent = 'Teach Your Dog To Fetch!';
const blogText3 = document.createElement('p');
blogText3.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.';

blogContainer.appendChild(el);
blogContainer.appendChild(blogImg);
blogContainer.appendChild(blogTitle);
blogContainer.appendChild(blogText);
blogContainer.appendChild(blogImg2);
blogContainer.appendChild(blogTitle2);
blogContainer.appendChild(blogText2);
blogContainer.appendChild(blogImg3);
blogContainer.appendChild(blogTitle3);
blogContainer.appendChild(blogText3);
