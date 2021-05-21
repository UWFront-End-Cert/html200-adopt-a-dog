const posts = [
  {
    thumbnail: './images/blog-1.jpg',
    title: 'Traveling with your Dog',
    paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes.'
  },
  {
    thumbnail: './images/blog-2.jpg',
    title: 'How to Walk Multiple Dogs',
    paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes.'
  },
  {
    thumbnail: './images/blog-3.jpg',
    title: 'Teach Your Dog to Fetch!',
    paragraph1: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes.'
  }
];

const main = document.getElementById('blog-main');

for (let i = 0; i < posts.length; i += 1) {
  const post = posts[i];

  const article = document.createElement('article');
  article.setAttribute('class', 'blog-post')

  const pic = document.createElement('img');
  pic.setAttribute('src', post.thumbnail);
  article.appendChild(pic);

  const articleHeading = document.createElement('h2');
  articleHeading.textContent = post.title;
  article.appendChild(articleHeading);

  const articleText1 = document.createElement('p');
  articleText1.textContent = post.paragraph1;
  article.appendChild(articleText1);

  const articleText2 = document.createElement('p');
  articleText2.textContent = post.paragraph2;
  article.appendChild(articleText2);

  main.appendChild(article);
}
