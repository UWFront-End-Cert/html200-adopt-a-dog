let total = 0;
let adoptList = [];
//Since both onclicks use this, I figure I just make a separate variable for it. Later on if needed I can implement unique prices for specific dog listings.

function dogPictureInfo(name, breed, fee) {
  alert(`Name: ${name}\nBreed: ${breed}\nAdoption Fees: $${fee}`);
}

function adoptionTotal(fee, name) {
  if (adoptList.includes(name)) {
    total-=fee;
    adoptList.splice(adoptList.indexOf(name),1);
  }
  else {
    adoptList.push(name);
    total+=fee;
  }
  console.log(name);
  alert(`Total Adoption Fee: $${total.toFixed(2)}`);



  /* Wanted to add the names to an array so I can check if I should
     add to the total value, or subtract from the total value when the array contains the name, but I am 
     not sure how to get the alt attribute from the img element within a specific 'doggie-cel' parent element */
}


function onFormSubmit() {
  let formName = document.getElementById('name').value;
  let formEmail = document.getElementById('email').value;
  let formStreet = document.getElementById('street').value;
  let formCity = document.getElementById('city').value;
  let formState = document.getElementById('state').value;
  let formZip = document.getElementById('zip').value;
  let formFirst = displayRadioValue();
  let formLocation = document.getElementById('location').value;


  if (formName === '' || formEmail === '' || formStreet === '' ||
      formCity === '' || formZip === '' || formFirst === '') {
        alert('Please fill in all the required fields');
      }
  else {
    alert('Thank you. The form information has been received');

    let formInput = {
      name: formName,
      email: formEmail,
      address: formStreet,
      city: formCity,
      state: formState,
      zip: formZip,
      firstTime: formFirst,
      location: formLocation
    }

    console.log(formInput);
  }
}

function displayRadioValue() {
  let ele = document.getElementsByName('first-time');
  let result = '';

  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked)  result = ele[i].getAttribute('value');
  }
  return result;
}

function createBlogs() {
  let container = document.getElementById('blogs');

  for (let i = 0; i < blogArticles.length; i++) {
    const blogArticle = blogArticles[i];

    const article = document.createElement('article');
    article.setAttribute('class', 'blog');
    
    const image = document.createElement('img');
    image.src = blogArticle.img;
    image.setAttribute('alt', `blog ${i+1}`);
    image.setAttribute('width', '368');
    image.setAttribute('height', '315');

    const blogHeader = document.createElement('h3');
    blogHeader.textContent = blogArticle.title;

    const content = document.createElement('p');
    content.innerHTML = blogArticle.content;

    article.appendChild(image);
    article.appendChild(blogHeader);
    article.appendChild(content);

    container.appendChild(article);
  }
}

function createDoggies(amountOfDoggies = doggieProfiles.length) {
    let container = document.getElementById('doggies');

    for (let i=0; i < amountOfDoggies; i++) {
      const doggieProfile = doggieProfiles[i];

      const doggieCel = document.createElement('div');
      doggieCel.setAttribute('class', 'doggie-cel');


      const image = document.createElement('img');
      image.src = doggieProfile.img;
      image.setAttribute('onclick', `dogPictureInfo(\'${doggieProfile.name}\', \'${doggieProfile.breed}\', ${doggieProfile.fee})`);
      image.setAttribute('alt', `${doggieProfile.name}`);
      image.setAttribute('width', '302');
      image.setAttribute('height', '190');

      const name = document.createElement('h4');
      name.textContent = doggieProfile.name;


      const cost = document.createElement('p');
      cost.innerHTML = (`<strong>Cost to Adopt: </strong>$${doggieProfile.fee}`);

      const description = document.createElement('p');
      description.textContent = doggieProfile.description;

      const button = document.createElement('a');
      button.textContent = ('Adopt');
      button.setAttribute('onclick', `adoptionTotal(${doggieProfile.fee}, \'${doggieProfile.name}\')`);
      button.setAttribute('class', 'green-button');

      doggieCel.appendChild(image);
      doggieCel.appendChild(name);
      doggieCel.appendChild(cost);
      doggieCel.appendChild(description);
      doggieCel.appendChild(button);

      container.appendChild(doggieCel);
    }
}

const doggieProfiles = [
  // {
  //   img: 'https://pbs.twimg.com/media/EfTOmCZU0AMqZn8?format=jpg&name=large',
  //   name: 'MICHAEL',
  //   fee: 123.45,
  //   description: 'this is michael',
  //   breed: 'Bastard'
  // },
  {
    img: 'images/murphy-card.jpg',
    name: 'Murphy',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/poppy-card.jpg',
    name: 'Poppy',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/jack-card.jpg',
    name: 'Jack',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/duffy-card.jpg',
    name: 'Duffy',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/lucas-card.jpg',
    name: 'Lucas',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/jake-card.jpg',
    name: 'Jake',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/angus-card.jpg',
    name: 'Angus',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/violet-card.jpg',
    name: 'Violet',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/piper-card.jpg',
    name: 'Piper',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/maximus-card.jpg',
    name: 'Maximus',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/luna-card.jpg',
    name: 'Luna',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },
  {
    img: 'images/stella-card.jpg',
    name: 'Stella',
    fee: 123.45,
    description: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    breed: 'DOG'
  },

];


const blogArticles = [
  {
    img: 'images/blog-1.jpg',
    title: 'Traveling With Your Dog',
    content: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.<br><br>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.`
  },
  {
    img: 'images/blog-2.jpg',
    title: 'How To Walk Multiple Dogs',
    content: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.<br><br>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.`
  },
  {
    img: 'images/blog-3.jpg',
    title: 'Teach Your Dog To Fetch!',
    content: `Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.<br><br>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.`
  }
];
