function dog_pic(name, fee) {
  alert("Name: " + name + "\nFee: " +fee);
}

let total = 0;

function add_dog(num) {
  total = total + num;
  document.getElementById("total").innerHTML = "$"+total;
  alert("Added to cart\nTotal: " + total);
}

// Generate posts for blog.html page
function generate_post() {
  const dummy_p = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat ad magnienecto volorent fugia nonsedi gendand itatquos as magnimpor aut molor autatia ad est officimus accae et omnia cus, od qui ate';

  const posts = [
    {src: 'images/blog-1.jpg',
    alt: '1.pic',
    h2: 'Traveling With Your Dog'},
    {src: 'images/blog-2.jpg',
    alt: '1.pic',
    h2: 'How to Walk Multiple Dogs'},
    {src: 'images/blog-3.jpg',
    alt: '1.pic',
    h2: 'Teach Your Dog To Fetch!'}
  ];

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    const blog = document.createElement('article');
    blog.setAttribute('class','post');
    const image = document.createElement('img');
    image.setAttribute('src',post.src);
    image.setAttribute('alt',post.alt);
    const title = document.createElement('h2');
    title.innerHTML = post.h2;
    const content = document.createElement('p');
    content.innerHTML = dummy_p;
    blog.appendChild(image);
    blog.appendChild(title);
    blog.appendChild(content);
    document.querySelector('.blog-section').appendChild(blog);
  }
}

// Generate dogs for index.html and dogs.html pages
function generate_dog(num) {
  const dummy_p = 'Corrum volorit iandae nimaxim cum restia volor   reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae';

  const dogs = [
    {src: 'images/murphy-card.jpg',
    alt: 'Murphy picture',
    h3: 'Murphy',
    price: 123.45},
    {src: 'images/poppy-card.jpg',
    alt: 'Poppy picture',
    h3: 'Poppy',
    price: 123.45},
    {src: 'images/jack-card.jpg',
    alt: 'Jack picture',
    h3: 'Jack',
    price: 123.45},
    {src: 'images/duffy-card.jpg',
    alt: 'Duffy picture',
    h3: 'Duffy',
    price: 123.45},
    {src: 'images/lucas-card.jpg',
    alt: 'Lucas picture',
    h3: 'Lucas',
    price: 123.45},
    {src: 'images/jake-card.jpg',
    alt: 'Jake picture',
    h3: 'Jake',
    price: 123.45},
    {src: 'images/angus-card.jpg',
    alt: 'Angus picture',
    h3: 'Angus',
    price: 123.45},
    {src: 'images/violet-card.jpg',
    alt: 'Violet picture',
    h3: 'Violet',
    price: 123.45},
    {src: 'images/piper-card.jpg',
    alt: 'Piper picture',
    h3: 'Piper',
    price: 123.45},
    {src: 'images/maximus-card.jpg',
    alt: 'Maximus picture',
    h3: 'Maximus',
    price: 123.45},
    {src: 'images/luna-card.jpg',
    alt: 'Luna picture',
    h3: 'Luna',
    price: 123.45},
    {src: 'images/stella-card.jpg',
    alt: 'Stella picture',
    h3: 'Stella',
    price: 123.45}
  ];

  for (let i = 0; i < Math.min(dogs.length, num); i++) {
    const dog = dogs[i];
    const card = document.createElement('article');
    card.setAttribute('class','dog-box');
    const image = document.createElement('img');
    image.setAttribute('src',dog.src);
    image.setAttribute('alt',dog.alt);
    image.onclick = function(){dog_pic(dog.h3,dog.price)};
    const title = document.createElement('h3');
    title.innerHTML = dog.h3;
    const content = document.createElement('p');
    content.innerHTML = dummy_p;
    const price = document.createElement('p');
    price.innerHTML = 'Cost to Adopt:'.bold() + ' $' + dog.price;
    const button = document.createElement('button');
    button.innerHTML = 'Adopt';
    button.onclick = function(){add_dog(dog.price)};
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(content);
    card.appendChild(button);
    document.querySelector('.dog-section').appendChild(card);
  }

  for (let i = 0; i < Math.min(dogs.length, num); i++) {
    const temp = document.createElement('div');
    temp.setAttribute('class','dog-box hidden');
    document.querySelector('.dog-section').appendChild(temp);
  }
}

// form listener for checkout page
function addListener() {
  document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you. The form information has been received');
    console.log('Name: '+ e.target[0].value);
    console.log('Email: '+ e.target[1].value);
    console.log('Address: '+ e.target[2].value);
    console.log('City: '+ e.target[3].value);
    console.log('State: '+ e.target[4].value);
  });
}

$(document).ready(function(){
  document.getElementById("total").innerHTML = '$ 0'

  $('.dog-box').hover(function(e){
    $(this).toggleClass('dog-box-hover');
  });

});
