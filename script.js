function dogInfo(name,breed,cost) {
  alert('This is ' + name + ', they are a ' + breed + ' breed. It is $' + cost + ' to bring them home with you!');
}

// blog
const blog = document.querySelector('#blog');
const entries = [
  {
    title: 'Traveling With Your Dog',
    image: 'images/blog-1.jpg',
    snippet: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
    copy: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
    <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>`
  },
  {
    title: 'How To Walk Multiple Dogs',
    image: 'images/blog-2.jpg',
    snippet: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
    copy: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
    <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>`
  },
  {
    title: 'Teach Your Dog To Fetch!',
    image: 'images/blog-3.jpg',
    snippet: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas doluptios dolupta tiandebis nem ut.',
    copy: `<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
    <p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>`
  }
];

if (blog) {
  for (let i = 0; i < entries.length; i += 1) {
    const entry = entries[i];

    const entryBody = document.createElement('article');
    entryBody.setAttribute('class', 'card');

    const entryImg = document.createElement('div');
    entryImg.setAttribute('class', 'card-img');
    const imageLoc = document.createElement('img');
    imageLoc.setAttribute('src', entry.image);

    const entryContent = document.createElement('div');
    entryContent.setAttribute('class', 'card-content');

    const entrySnippet = document.createElement('p');
    entrySnippet.setAttribute('class', 'snippet');
    entrySnippet.textContent = entry.snippet;

    const homeLink = document.createElement('p');
    homeLink.setAttribute('class', 'read-more');
    homeLink.innerHTML = '<a href="blog.html">Read more &gt;&gt;</a>';

    const entryTitle = document.createElement('h3');
    entryTitle.setAttribute('class', 'card-title');
    entryTitle.textContent = entry.title;

    const entryCopy = document.createElement('div');
    entryCopy.setAttribute('class', 'card-copy');
    entryCopy.innerHTML = entry.copy;

    //blog
    blog.appendChild(entryBody);
    entryImg.appendChild(imageLoc);
    entryBody.appendChild(entryImg);
    entryContent.appendChild(entryTitle);
    entryContent.appendChild(entryCopy);
    entryContent.appendChild(entrySnippet);
    entryContent.appendChild(homeLink);
    entryBody.appendChild(entryContent);
  };
}
// dogs
const dogsHome = document.querySelector('.home-content .main-left #dogs');
const dogs = document.querySelector('#dogs');
const info = [
  {
    img: 'images/murphy-card.jpg',
    name: 'Murphy',
    breed: 'Brown and White',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/poppy-card.jpg',
    name: 'Poppy',
    breed:'Small, Cute, and Fluffy',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/jack-card.jpg',
    name: 'Jack',
    breed:'Small, Jack Russell Terrior',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/duffy-card.jpg',
    name: 'Duffy',
    breed:'American Bull Dog Mix',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/lucas-card.jpg',
    name: 'Lucas',
    breed:'Black Shetland Terrior Mix',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/jake-card.jpg',
    name: 'Jake',
    breed:'Small terrior, Lab mix',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/angus-card.jpg',
    name: 'Angus',
    breed:'Boxer',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/violet-card.jpg',
    name: 'Violet',
    breed:'Chocolate lab',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/piper-card.jpg',
    name: 'Piper',
    breed:'Small, fluffy, brown',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/maximus-card.jpg',
    name: 'Maximus',
    breed:'Small black and white terrior',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/luna-card.jpg',
    name: 'Luna',
    breed:'Happy golden / lab mix',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  },
  {
    img: 'images/stella-card.jpg',
    name: 'Stella',
    breed:'Small chihuahua',
    cost: 123.45,
    descr: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae'
  }
];

if (dogs){
  for (let j = 0; j < info.length; j += 1) {
    if (dogsHome){info.length = 6};
    const dog = info[j];

    const dogBody = document.createElement('article');
    dogBody.setAttribute('class', 'card');
    const dogImg = document.createElement('img');
    const dogInfo = `dogInfo('${dog.name}','${dog.breed}',${dog.cost})`;
    dogImg.setAttribute('class', 'card-img');
    dogImg.setAttribute('src', dog.img);
    dogImg.setAttribute('alt', dog.name + ' a ' + dog.breed);
    dogImg.setAttribute('onclick', dogInfo);


    const dogName = document.createElement('h3');
    dogName.setAttribute('class', 'card-title');
    dogName.textContent = dog.name;

    const dogCost = document.createElement('p');
    dogCost.innerHTML = '<strong>Cost to Adopt:</strong> $' + dog.cost;

    const dogDesc = document.createElement('p');
    dogDesc.textContent = dog.descr;

    const dogBtn = document.createElement('button');
    dogBtn.setAttribute('class', 'button btn-green small adopt');
    dogBtn.textContent = "Adopt";

    dogBody.appendChild(dogImg);
    dogBody.appendChild(dogName);
    dogBody.appendChild(dogCost);
    dogBody.appendChild(dogDesc);
    dogBody.appendChild(dogBtn);
    dogs.appendChild(dogBody);
  };
}
