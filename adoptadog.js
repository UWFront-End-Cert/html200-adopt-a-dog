
let total = 0;
document.getElementById("total").innerHTML = "$"+total;

function add_dog(price) {
  total = total + price;
  document.getElementById("total").innerHTML = "$"+total;
  alert("Added to cart\nTotal: " + total);
}

function dog_pic(name, breed, fee) {
  alert("Name: " + name+ "\nBreed: " + breed + "\nFee: " +fee);
}

function generate_post() {
  dummy_p = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat ad magnienecto volorent fugia nonsedi gendand itatquos as magnimpor aut molor autatia ad est officimus accae et omnia cus, od qui ate';

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

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you. The form information has been received');
  console.log('Name: '+e.target[0].value);
  console.log('Email: '+e.target[1].value);
  console.log('Address: '+e.target[2].value);
  console.log('City: '+e.target[3].value);
  console.log('State: '+e.target[4].value);
});
