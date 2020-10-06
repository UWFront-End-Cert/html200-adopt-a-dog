
const blogitems = [
{
  img: 'images/blog-1.jpg',
  alt: 'image from behind a women hugging black dog while sitting and looking at a beautiful view of a cayon',
  h3: 'Traveling With Your Dog',
  p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
}];
const blogitems2 = [
{
  img: 'images/blog-2.jpg',
  alt: 'image of multiple dogs on leashes getting ready for their walk',
  h3: 'How To Walk Multiple Dogs',
  p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
}];
const blogitems3 = [
{
  img: 'images/blog-3.jpg',
  alt: 'sunset silhouette image of a women playing fetch with her dog',
  h3: 'Teach Your Dog To Fetch!',
  p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
}];


  const h2 = document.createElement('h2');
  h2.textContent = "Adoptadog Blog";
  h2.className = "header3";
  document.getElementsByTagName('article')[0].appendChild(h2);



  const section1 = document.createElement('section');
  section1.className = "section1";
  document.getElementsByClassName('blog')[0].appendChild(section1);

  const div1 = document.createElement('div');
  div1.className = 'flexbox-content';
  document.getElementsByClassName('section1')[0].appendChild(div1);

  const div2 = document.createElement('div');
  div2.className = 'blogbox';
  document.getElementsByClassName('flexbox-content')[0].appendChild(div2);

  const div3 = document.createElement('div');
  div3.className = 'blogbox2';
  document.getElementsByClassName('flexbox-content')[0].appendChild(div3);




  const section2 = document.createElement('section');
  section2.className = "section2";
  document.getElementsByClassName('blog')[0].appendChild(section2);

  const div4 = document.createElement('div');
  div4.className = 'flexbox-content5';
  document.getElementsByClassName('section2')[0].appendChild(div4);

  const div5 = document.createElement('div');
  div5.className = 'blogbox3';
  document.getElementsByClassName('flexbox-content5')[0].appendChild(div5);

  const div6 = document.createElement('div');
  div6.className = 'blogbox4';
  document.getElementsByClassName('flexbox-content5')[0].appendChild(div6);



  const section3 = document.createElement('section');
  section3.className = "section3";
  document.getElementsByClassName('blog')[0].appendChild(section3);

  const div7 = document.createElement('div');
  div7.className = 'flexbox-content6';
  document.getElementsByClassName('section3')[0].appendChild(div7);

  const div8 = document.createElement('div');
  div8.className = 'blogbox5';
  document.getElementsByClassName('flexbox-content6')[0].appendChild(div8);

  const div9 = document.createElement('div');
  div9.className = 'blogbox6';
  document.getElementsByClassName('flexbox-content6')[0].appendChild(div9);




  for (let i = 0; i < blogitems.length; i += 1) {
      const blogitem = blogitems[i];

  const img = document.createElement('img');
  img.className = 'blogimage';
  img.setAttribute('src', blogitem.img);
  img.setAttribute('alt', blogitem.alt);
  document.getElementsByClassName('blogbox')[0].appendChild(img);

  const h3 = document.createElement('h3');
  h3.className = 'h3class';
  h3.textContent = blogitem.h3;
  document.getElementsByClassName('blogbox2')[0].appendChild(h3);

  const p = document.createElement('p');
  p.className = 'pgrap';
  p.textContent = blogitem.p;
  document.getElementsByClassName('blogbox2')[0].appendChild(p);

}

for (let i = 0; i < blogitems2.length; i += 1) {
    const blogitem2 = blogitems2[i];

const img = document.createElement('img');
img.className = 'blogimage';
img.setAttribute('src', blogitem2.img);
img.setAttribute('alt', blogitem2.alt);
document.getElementsByClassName('blogbox3')[0].appendChild(img);

const h3 = document.createElement('h3');
h3.className = 'h3class';
h3.textContent = blogitem2.h3;
document.getElementsByClassName('blogbox4')[0].appendChild(h3);

const p = document.createElement('p');
p.className = 'pgrap';
p.textContent = blogitem2.p;
document.getElementsByClassName('blogbox4')[0].appendChild(p);

}

for (let i = 0; i < blogitems3.length; i += 1) {
    const blogitem3 = blogitems3[i];

const img = document.createElement('img');
img.className = 'blogimage';
img.setAttribute('src', blogitem3.img);
img.setAttribute('alt', blogitem3.alt);
document.getElementsByClassName('blogbox5')[0].appendChild(img);

const h3 = document.createElement('h3');
h3.className = 'h3class';
h3.textContent = blogitem3.h3;
document.getElementsByClassName('blogbox6')[0].appendChild(h3);

const p = document.createElement('p');
p.className = 'pgrap';
p.textContent = blogitem3.p;
document.getElementsByClassName('blogbox6')[0].appendChild(p);

}
