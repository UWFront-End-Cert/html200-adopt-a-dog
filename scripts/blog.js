
  const blogs = [
  {
    image: 'images/blog-1.jpg',
    alt: 'woman holding dog looking at canyon',
    headline: 'Traveling With Your Dog',
    para1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur.',
    para2: 'Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
  },
  {
    image: 'images/blog-2.jpg',
    alt: 'four large dogs at the dog park',
    headline: 'How To Walk Multiple Dogs',
    para1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur.',
    para2: 'Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
  },
  {
    image: 'images/blog-3.jpg',
    alt: 'silhouette of woman and dog playing fetch in the sunset',
    headline: 'Teach Your Dog To Fetch',
    para1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur.',
    para2: 'Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.',
  },
];

const blogsContainer = document.getElementById('blogs-container');
  console.log(blogsContainer);

for (let i = 0; i < blogs.length; i++) {
  const blog = blogs[i];

  const dogArticle = document.createElement('article');
  dogArticle.setAttribute('class', 'blog-article');

  const dogImage = document.createElement('img');
  dogImage.setAttribute('src', blog.image);
  dogImage.setAttribute('alt', blog.alt);
  dogArticle.appendChild(dogImage);

  const headline = document.createElement('h3');
  dogArticle.appendChild(headline);
  headline.textContent = blog.headline;

  const para1 = document.createElement('p');
  dogArticle.appendChild(para1);
  para1.textContent = blog.para1;

  const para2 = document.createElement('p');
  dogArticle.appendChild(para2);
  para2.textContent = blog.para2;

  blogsContainer.appendChild(dogArticle);
}
