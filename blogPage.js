const h2Blog = {
  title: 'Adoptadog Blog',
}
    const h2 = document.createElement('h2');
      h2.innerHTML = h2Blog.title
const section = document.getElementById('dogBlog');
const blogOne = {
  title: 'Traveling With Your Dog',
  para: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenemquidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
}
const divOne = document.createElement('div');
document.body.appendChild(divOne);
divOne.classList.add("blogPost");
const h4One = document.createElement('h4');
h4One.innerHTML = blogOne.title

 divOne.appendChild(h4One);

 const imgOne = document.createElement('img');
 imgOne.src = 'images/blog-1.jpg';
 document.body.appendChild(imgOne);
 divOne.appendChild(imgOne);

 const pOne = document.createElement('p');
 document.body.appendChild(pOne);

 pOne.innerHTML = blogOne.para
 divOne.appendChild(pOne);


 const blogTwo = {
  title: 'How To Walk Multiple Dogs',
  para: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenemquidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
}
const divTwo = document.createElement('div');
document.body.appendChild(divTwo);
divTwo.classList.add("blogPost");
const h4Two = document.createElement('h4');
h4Two.innerHTML = blogTwo.title

 divTwo.appendChild(h4Two);

 const imgTwo = document.createElement('img');
 imgTwo.src = 'images/blog-2.jpg';
 document.body.appendChild(imgTwo);
 divTwo.appendChild(imgTwo);

 const pTwo = document.createElement('p');
 document.body.appendChild(pTwo);

 pTwo.innerHTML = blogTwo.para
 divTwo.appendChild(pTwo);

 const blogThree = {
  title: 'Teach Your Dog To Fetch!',
  para: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenemquidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
}
const divThree = document.createElement('div');
document.body.appendChild(divThree);
divThree.classList.add("blogPost");
const h4Three = document.createElement('h4');
h4Three.innerHTML = blogThree.title

 divThree.appendChild(h4Three);

 const imgThree = document.createElement('img');
 imgThree.src = 'images/blog-3.jpg';
 document.body.appendChild(imgThree);
 divThree.appendChild(imgThree);

 const pThree = document.createElement('p');
 document.body.appendChild(pThree);

 pThree.innerHTML = blogThree.para
 divThree.appendChild(pThree);

 document.getElementById('dogBlog').appendChild(h2);
document.getElementById('dogBlog').appendChild(divOne);
document.getElementById('dogBlog').appendChild(h4One);
document.getElementById('dogBlog').appendChild(pOne);
document.getElementById('dogBlog').appendChild(imgOne);

document.getElementById('dogBlog').appendChild(divTwo);
document.getElementById('dogBlog').appendChild(h4Two);
document.getElementById('dogBlog').appendChild(pTwo);
document.getElementById('dogBlog').appendChild(imgTwo);

document.getElementById('dogBlog').appendChild(divThree);
document.getElementById('dogBlog').appendChild(h4Three);
document.getElementById('dogBlog').appendChild(pThree);
document.getElementById('dogBlog').appendChild(imgThree);
