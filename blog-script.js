const blogMain = document.getElementById('blog-Main');

const blogs = [
  {
    img: 'images/blog-1.jpg',
    alt: 'Pet and owner overlooking a canyon',
    title:'Traveling with your Dog',
    parOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat',
    parTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    img:'images/blog-2.jpg',
    alt: 'Mutliple dogs on leash',
    title: 'How to walk multiple dogs on a leash',
    parOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat',
    parTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    img:'images/blog-3.jpg',
    alt: 'Person playing fetch with their dog',
    title: 'Teach Your Dog To Fetch',
    parOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat',
    parTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  }
];

// Creates Header Element

const blogHeader = document.createElement('h1');
blogHeader.innerText = 'Adopt a dog Blog';
blogHeader.setAttribute('class', 'our-dogs-title');

blogMain.appendChild(blogHeader);

// Creates Parent Div Container

const blogContainerBoard = document.createElement('div');
blogContainerBoard.setAttribute('class', 'blog-container-board');

blogMain.appendChild(blogContainerBoard);

//Creates the blogs Elements

for(let i = 0; i < blogs.length; i++){

  // Creates Article
  const article = document.createElement('article');
  article.setAttribute('class', 'blog-container');

  blogMain.appendChild(article);

  //Creates Image
  const blogImage = document.createElement('img');
  blogImage.setAttribute('class', 'blog-img');
  blogImage.setAttribute('src', blogs[i].img);
  blogImage.setAttribute('alt', blogs[i].alt);

  article.appendChild(blogImage);

  //Creates Second Div with paragraphs
  const blogCopy = document.createElement('div');
  blogCopy.setAttribute('class', 'blog-copy');

  article.appendChild(blogCopy);

  const innerHeader = document.createElement('h2');
  innerHeader.innerText = blogs[i].title;

  blogCopy.appendChild(innerHeader);

  const parOne = document.createElement('p');
  parOne.innerText = blogs[i].parOne;
  const parTwo = document.createElement('p');
  parTwo.innerText = blogs[i].parTwo;

  blogCopy.appendChild(parOne);
  blogCopy.appendChild(parTwo);

}
