const blogContainer = document.createElement('div');
blogContainer.classList.add('blog-container');

const footer = document.querySelector('footer');

document.body.insertBefore(blogContainer, footer);

let blogEntries = [
  {
    img: "images/blog-1.jpg",
    h3 : "Travelling With Your Dog",
    p : "Kibbles vet chi catch stand bark jump collie. Stand dog house stay collar aussie stand kibbles roll over. Zoomies growl puppy boops rottie leash, shake down dog bone chew toy bark husky."
  },
  {
    img : "images/blog-2.jpg",
    h3 : "How To Walk Multiple Dogs",
    p : "Kibbles vet chi catch stand bark jump collie. Stand dog house stay collar aussie stand kibbles roll over. Zoomies growl puppy boops rottie leash, shake down dog bone chew toy bark husky."
  },
  {
    img : "images/blog-3.jpg",
    h3 : "Teach Your Dog to Fetch",
    p : "Kibbles vet chi catch stand bark jump collie. Stand dog house stay collar aussie stand kibbles roll over. Zoomies growl puppy boops rottie leash, shake down dog bone chew toy bark husky."
  }
];

for (let i = 0; i < blogEntries.length; i ++) {
  let entry = blogEntries[i];

  const imgdiv = document.createElement('div');
  blogContainer.appendChild(imgdiv);
  imgdiv.classList.add('blog-img');

  const img = document.createElement('img');
  img.src = entry.img;
  img.setAttribute('alt', 'dog blog photo');
  imgdiv.appendChild(img);

  const blogdiv = document.createElement('div');
  blogContainer.appendChild(blogdiv);
  blogdiv.classList.add('blog-content');

  const h3 = document.createElement('h3');
  h3.textContent = entry.h3;
  blogdiv.appendChild(h3);

  const blogContent = document.createElement('p');
  blogContent.textContent = entry.p;
  blogdiv.appendChild(blogContent);
}
