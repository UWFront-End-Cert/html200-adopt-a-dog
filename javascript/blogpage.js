
const blogitems = [
{
  img: 'images/blog-1.jpg',
  alt: 'image from behind a women hugging black dog while sitting and looking at a beautiful view of a cayon',
  h3: 'Traveling With Your Dog',
  p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
},
{
  img: 'images/blog-2.jpg',
  alt: 'image of multiple dogs on leashes getting ready for their walk',
  h3: 'How To Walk Multiple Dogs',
  p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
},
{
  img: 'images/blog-3.jpg',
  alt: 'sunset silhouette image of a women playing fetch with her dog',
  h3: 'Teach Your Dog To Fetch!',
  p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
}
];


  const h2 = document.createElement('h2');
  h2.textContent = "Adoptadog Blog";
  h2.className = "header3";
  document.getElementsByTagName('article')[0].appendChild(h2);

  const section = document.createElement('section');
  document.getElementsByClassName('blog')[0].appendChild(section);

  for (let i = 0; i < blogitems.length; i += 1) {
      const blogitem = blogitems[i];

  const img = document.createElement('img');
  img.className = 'blogimage';
  img.setAttribute('src', blogitem.img);
  img.setAttribute('alt', blogitem.alt);
  document.getElementsByTagName('section')[0].appendChild(img);

  const h3 = document.createElement('h3');
  h3.className = 'h3class';
  h3.textContent = blogitem.h3;
  document.getElementsByTagName('section')[0].appendChild(h3);

  const p = document.createElement('p');
  p.className = 'pgrap';
  p.textContent = blogitem.p;
  document.getElementsByTagName('section')[0].appendChild(p);

}
