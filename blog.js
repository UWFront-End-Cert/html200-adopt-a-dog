const blogs = [
  {
    headline: 'Traveling With Your Dog',
    text: "mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: './images/blog-1.jpg',
    alt: 'woman holding dog',
  },
  {
    headline: 'How To Walk Multiple Dogs',
    text: "mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: './images/blog-2.jpg',
    alt: 'dogs looking at dog walker',
  },
  {
    headline: 'Teach Your Dog To Fetch!',
    text: "mply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: './images/blog-3.jpg',
    alt: 'woman playing with dog in sunset',
  },
];

const blogsContainer = document.getElementById('blogs-container');
console.log(blogsContainer);

for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const dogArticle = document.createElement('article');
    dogArticle.setAttribute('class', 'blog-article');

    const dogImage = document.createElement('img');
    dogImage.setAttribute('src', blog.image);
    dogImage.setAttribute('alt', blog.alt);
    dogImage.setAttribute('class', 'blog-img');

    dogArticle.appendChild(dogImage);

    const textBox = document.createElement('div');
    textBox.setAttribute('class', 'blog-article_text-box');
    dogArticle.appendChild(textBox);

    const headline = document.createElement('h3');
    headline.setAttribute('class', 'blog-article_heading');
    headline.textContent = blog.headline;
    textBox.appendChild(headline);

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'blog-article_text');
    paragraph.textContent = blog.text;
    textBox.appendChild(paragraph);


    blogsContainer.appendChild(dogArticle)
}
