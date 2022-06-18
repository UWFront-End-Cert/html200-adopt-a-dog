//inserting title
document.createElement('h1');
const title = document.createElement('h1');
title.textContent = 'Adoptadog Blog';

const blog = document.getElementById('blogs');
document.body.insertBefore(title, blog);

//inserting blog posts
const articleItems = [
  {
    articleImage: './images/blog-1.jpg',
    articleTitle: 'Traveling With Your Dog',
    articleContents: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
  },
  {
    articleImage: './images/blog-2.jpg',
    articleTitle: 'How To Walk Multiple Dogs',
    articleContents: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem //quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut //alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus //explam sus am aut amet ant fugiatum, utem non reptat.'
  },
  {
    articleImage: './images/blog-3.jpg',
    articleTitle: 'Teach Your Dog To Fetch!',
    articleContents: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
  }
];

document.createElement('article');
const articles = document.createElement('article');
document.body.insertBefore(articles, blog);

for (let i = 0; i < articleItems.length; i += 1) {
  const items = articleItems[i];

  const articleImage = document.createElement('img');
  articleImage["src"] = items.articleImage;

  const articleTitle = document.createElement('h3');
  articleTitle.textContent = items.articleTitle;

  const articleContents = document.createElement('content');
  articleContents.textContent = items.articleContents;

  articles.appendChild(articleTitle);
  articles.appendChild(articleImage);
  articles.appendChild(articleContents);
}
