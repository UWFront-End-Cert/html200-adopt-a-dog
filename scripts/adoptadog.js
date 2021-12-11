let name = 'dog';
let breed = 'breed';
let cart = [];
let price = 0;
let total = 0;
const filler = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
const extra = 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
const blogs = [{
    img: 'images/blog-1.jpg',
    alt: 'A woman enjoying the view of the mountains with her dog',
    title: 'Traveling With Your Dog',
    text: filler,
    extra: extra,
  },
  {
    img: 'images/blog-2.jpg',
    alt: 'Multiple sitting dogs on leashes getting ready for a walk',
    title: 'How To Walk Multiple Dogs',
    text: filler,
    extra: extra,
  },
  {
    img: 'images/blog-3.jpg',
    alt: 'A silhouette woman preparing to throw a ball for her dog to fetch',
    title: 'Teach Your Dog To Fetch!',
    text: filler,
    extra: extra,
  }
]


function dogInfo(name, breed, price) {
  alert('Dog: ' + name + '\n' + 'Breed: ' + breed + '\n' + 'Adoption fee: $' + price.toFixed(2));
}

function updateTotal(price) {
  total += price;
  return total;
}

function addToCart(name, price) {
  if (cart.includes(name)) {
    alert(name + ' is already in cart!')
  } else {
    updateTotal(price);
    cart.push(name);
    $('.total').text(`$${total.toFixed(2)}`);
    alert('Total fees: $' + total.toFixed(2));
  }
}

function createBlogs() {
  let container = document.getElementById('blog-entries');

  container.innerHTML = '<h1>Adoptadog Blog</h1>';

  for (let i = 0; i < blogs.length; i++) {
    const entry = blogs[i];

    const article = document.createElement('article');
    article.setAttribute('class', 'entry');
    container.appendChild(article);

    const image = document.createElement('img');
    image.src = entry.img;
    image.setAttribute('alt', entry.alt);
    article.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = entry.title;
    article.appendChild(title);

    const content = document.createElement('p');
    content.textContent = entry.text;
    article.appendChild(content);

    const secondParagraph = document.createElement('p');
    secondParagraph.textContent = entry.extra;
    article.appendChild(secondParagraph);
  }
}

// function submitButton() {
//   try {
//     let form = {
//       name: document.getElementById('userName').value,
//       email: document.getElementById('userEmail').value,
//       address: document.getElementById('userAddress').value,
//       city: document.getElementById('city').value,
//       state: document.getElementById('state').value,
//       zip: document.getElementById('zipCode').value,
//       first: document.querySelector('input[name="firstAdopt"]:checked').value,
//       pickup: document.getElementById('location').value,
//     };
//     console.log(form);
//     if (form.name == '' || form.email == '' || form.address == '' ||
//       form.city == '' || form.state == '' || form.zip == '' ||
//       form.pickup == '') {
//       alert('Please fill out all fields.');
//     } else {
//       alert('Thank you. The form information has been received. ');
//     }
//   } catch (TypeError) {
//     console.log('Radio button not selected');
//     alert('First time adopter? Please select Yes or No.');
//   }
// }

function submitButton() {
  let form = {
    name: $('#userName').val(),
    email: $('#userEmail').val(),
    address: $('#userAddress').val(),
    city: $('#city').val(),
    state: $('#state').val(),
    zip: $('#zipCode').val(),
    first: $('input[name="firstAdopt"]:checked').val(),
    pickup: $('#location').val(),
  };
  console.log(form);
  if (form.name == '' || form.email == '' || form.address == '' ||
    form.city == '' || form.state == '' || form.zip == '' ||
    form.pickup == '' || form.first == undefined) {
    alert('Please fill out all fields.');
  } else {
    alert('Thank you. The form information has been received. ');
  }
}

$(function() {
  $('.dog').hover(function(e) {
      $('img', this).css({
        'transform': 'scale(1.25)',
        'transition': '.5s'
      });
    },
    function(e) {
      $('img', this).css({
        'transform': 'scale(1)',
        'transition': '.5s'
      });
    });
});
