  const blogArray = [
  {
    image: 'images/blog-1.jpg',
    alt: 'Woman and dog sitting on mountaintop with backs to viewer',
    headline: 'Traveling With Your Dog', 
    para1: 'Lotsa pats noodle horse very good spot clouds fat boi, lotsa pats long bois. Long bois thicc noodle horse such treat smol borking doggo with a long snoot for pats sub woofer doggo, shoober many pats clouds stop it fren. Fluffer puggo h*ck I am bekom fat mlem waggy wags, long snoot for pats the neighborhood pupper woofer.',
    para2: 'Bork long woofer I am bekom fat ur givin me a spook vvv. Shoober adorable doggo you are doin me a concern adorable doggo very good spot tungg dat tungg tho wrinkler wow very biscit doge, very jealous pupper he made many woofs doggo maximum borkdrive waggy wags clouds h*ck.', 
  },
  {
    image: 'images/blog-2.jpg',
    alt: 'Four dogs on leash sitting looking toward hand holding leashes', 
    headline: 'How To Walk Multiple Dogs', 
    para1: 'Lotsa pats noodle horse very good spot clouds fat boi, lotsa pats long bois. Long bois thicc noodle horse such treat smol borking doggo with a long snoot for pats sub woofer doggo, shoober many pats clouds stop it fren. Fluffer puggo h*ck I am bekom fat mlem waggy wags, long snoot for pats the neighborhood pupper woofer.',
    para2: 'Bork long woofer I am bekom fat ur givin me a spook vvv. Shoober adorable doggo you are doin me a concern adorable doggo very good spot tungg dat tungg tho wrinkler wow very biscit doge, very jealous pupper he made many woofs doggo maximum borkdrive waggy wags clouds h*ck.', 
  },
  {
    image: 'images/blog-3.jpg',
    alt: 'Dog sitting and looking up at woman holding ball', 
    headline: 'Teach Your Dog To Fetch', 
    para1: 'Lotsa pats noodle horse very good spot clouds fat boi, lotsa pats long bois. Long bois thicc noodle horse such treat smol borking doggo with a long snoot for pats sub woofer doggo, shoober many pats clouds stop it fren. Fluffer puggo h*ck I am bekom fat mlem waggy wags, long snoot for pats the neighborhood pupper woofer.',
    para2: 'Bork long woofer I am bekom fat ur givin me a spook vvv. Shoober adorable doggo you are doin me a concern adorable doggo very good spot tungg dat tungg tho wrinkler wow very biscit doge, very jealous pupper he made many woofs doggo maximum borkdrive waggy wags clouds h*ck.', 
  },
];

const blogsContainer = document.getElementById('blogs-container');
  console.log(blogsContainer);

for (let i = 0; i < blogArray.length; i++) {
  const blog = blogArray[i];

  const dogArticle = document.createElement('article');
  dogArticle.setAttribute('class', 'blog-container');

  const dogImage = document.createElement('img');
  dogImage.setAttribute('src', blog.image);
  dogImage.setAttribute('alt', blog.alt);
  dogImage.setAttribute('class', 'blog-img');
  dogArticle.appendChild(dogImage);

  const blogTextBox = document.createElement('div');
  blogTextBox.setAttribute('class', 'blog-text');
  dogArticle.appendChild(blogTextBox);

  const headline = document.createElement('h2');
  blogTextBox.appendChild(headline);
  headline.textContent = blog.headline;
  
  const para1 = document.createElement('p');
  blogTextBox.appendChild(para1);
  para1.textContent = blog.para1;

  const para2 = document.createElement('p');
  blogTextBox.appendChild(para2);
  para2.textContent = blog.para2;

  blogsContainer.appendChild(dogArticle);
}