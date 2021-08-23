const blogs = [
  {
    title: 'Traveling with your Dog',
    image: 'images/blog-1.jpg',
    body: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    title: 'How to Walk Multiple Dogs',
    image: 'images/blog-2.jpg',
    body: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    title: 'Teach Your Dog to Fetch!',
    image: 'images/blog-3.jpg',
    body: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  }
];

const pageTitle = document.createElement('h2');
document.getElementById('blog-body').appendChild(pageTitle);
pageTitle.textContent = 'Adoptadog Blog';
pageTitle.setAttribute('class', 'blogs-header');

for (let i = 0; i < blogs.length; i+= 1) {
  const blog = blogs[i];

  const blogArticle = document.createElement('article');
  blogArticle.setAttribute('class', 'blog');
  document.getElementById('blog-body').appendChild(blogArticle);

  const image = document.createElement('img');
  image.setAttribute('src', blog.image);
  image.setAttribute('class', 'blog-img');

  const title = document.createElement('h3');
  title.textContent = blog.title;

  const body = document.createElement('p');
  body.textContent = blog.body;

  blogArticle.appendChild(image);
  blogArticle.appendChild(title);
  blogArticle.appendChild(body);
}
