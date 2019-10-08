// creates objects for each blog post
const data = [{

  imgSrc: 'images/blog-1.jpg',
  imgAlt: 'woman and dog sitting on cliff overlooking rocky mountains.',
  title: 'Traveling With Your Dog',
  body: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
        <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><br>`
}, {
  imgSrc: 'images/blog-2.jpg',
  imgAlt: 'Four leashed dogs sitting on a brick plaza.',
  title: 'How to Walk Multiple Dogs',
  body: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
        <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><br>`
}, {
  imgSrc: 'images/blog-3.jpg',
  imgAlt: 'shadow of woman preparing to throw a ball for the dog in front of her.',
  title: 'Teach Your Dog to Fetch!',
  body: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
        <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p><br>`
}]

//template
function renderTemplate(blog) {
  const { imgSrc, imgAlt, title, body } = blog;
  return `
    <img src=${imgSrc} alt="${imgAlt}">
    <div class="aside-text"><h2>${title}</h2>
    ${body}</div>`;
}

//adds h1 element
const heading = document.createElement('h1')
heading.innerHTML = 'Adoptadog Blog';
document.getElementById('main-content').appendChild(heading);

//creates div, inputs template, adds class for styling
data.forEach((item) => {
  const blogDivs = document.createElement('div');
  blogDivs.setAttribute('class', 'blog-post');
  blogDivs.innerHTML = renderTemplate(item);
  document.getElementById('main-content').appendChild(blogDivs);
})
