const blogs = [
  {
    headline: 'Traveling With Your Dog',
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
    Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
    image: './images/blog-1.jpg',
    alt: 'woman holding dog',
  },
  {
    headline: 'How To Walk Multiple Dogs',
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
    Uptiuse andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
    image: './images/blog-2.jpg',
    alt: 'dogs looking at dog walker',
  },
  {
    headline: 'Teach Your Dog To Fetch!',
    text: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.
    Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
    image: './images/blog-3.jpg',
    alt: 'woman playing with dog in sunset',
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
    dogImage.setAttribute('class', 'blog-img');

    dogArticle.appendChild(dogImage);

    const textBox = document.createElement('div');
    textBox.setAttribute('class', 'blog-article_text-box');
    dogArticle.appendChild(textBox);

    const headline = document.createElement('h3');
    headline.setAttribute('class', 'blog-article_heading');
    headline.textContent = blog.headline;
    textBox.appendChild(headline);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'blog-article_text');
    paragraph.textContent = blog.text;
    textBox.appendChild(paragraph);

    blogsContainer.appendChild(dogArticle)
}
