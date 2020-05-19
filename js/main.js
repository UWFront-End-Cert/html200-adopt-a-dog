const blogContainers = [
  {
    img: 'images/blog-1.jpg',
      h2: 'Travelling with your dog',
      p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
      p2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'

  },
  {
    img: 'images/blog-2.jpg',
     h2: 'How To Walk Multiple Dogs',
     p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
     p2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'

  },
  {
    img: 'images/blog-3.jpg',
     h2: 'Teach Your Dog To Fetch',
     p1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
     p2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'

  }
];

const div = document.getElementsByClassName('flex-container')[0];
// const h2 = document.createElement('h2');
// h2.textContent = "Travelling with your dog";
// div.appendChild(h2);
// const img = document.createElement('img');
// img.setAttribute('src','file:///C:/Users/swati/OneDrive/Desktop/html200/adopt-a-dog/images/blog-1.jpg');
// div.appendChild(img);
for (let i = 0; i < blogContainers.length; i++) {
const blogContainer = blogContainers[i];
const divblog = document.createElement('div');
divblog.setAttribute('class', 'blog-container');
const img = document.createElement('img');
img.setAttribute('src', blogContainer.img);
divblog.appendChild(img);

const parablog = document.createElement('div');
parablog.setAttribute('class', 'para-blog');

const h2 = document.createElement('h2');
h2.textContent = blogContainer.h2;


parablog.appendChild(h2);

const p1 = document.createElement('p');
p1.textContent = blogContainer.p1;
parablog.appendChild(p1);

const p2 = document.createElement('p');
p2.textContent = blogContainer.p2;
parablog.appendChild(p2);

divblog.appendChild(parablog);
div.appendChild(divblog);
}
