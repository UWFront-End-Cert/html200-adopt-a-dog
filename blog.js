const posts = [
  {
    className: 'blog',
    title: 'Traveling with your Dog',
    blogText: 'Here is some blog text. duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium',
    imageSrc: './images/blog-1.jpg',
    imageAlt: 'a dog at the grand canyon'
  },
  {
    className: 'blog',
    title: 'How to Walk Multiple Dogs',
    blogText:'Here is some blog text. duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium',
    imageSrc: './images/blog-2.jpg',
    imageAlt:'multiple leashed dogs sitting'
  },

  {
    className: 'blog',
    title: 'Teach your dog to Fetch',
    blogText: 'Here is some blog text. duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium.',
    imageSrc: './images/blog-3.jpg',
    imageAlt:'dog and person at sunset'
  }

];

const postDiv = document.createElement('div');
document.body.appendChild(postDiv);

for (let i = 0; i < posts.length; i+= 1) {
  let post = posts[i];

  let blogTitle = document.createElement('h3');
  let blogNode = document.createTextNode(post.title);
  blogTitle.appendChild(blogNode);
  document.getElementById("full-blog").appendChild(blogTitle);

  let divImage = document.createElement('div');
  let image = document.createElement('img');
  image.src = post.imageSrc;
  image.alt = post.imageAlt;
  image.style.width = "30rem";
  divImage.appendChild(image);
  divImage.setAttribute("class", post.className);
  document.getElementById("full-blog").appendChild(divImage);

  let blogText = document.createElement('p');
  let textNode = document.createTextNode(post.blogText)
  blogText.appendChild(textNode);
  document.getElementById("full-blog").appendChild(blogText);
}
