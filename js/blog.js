const blogs = [
    {
        headline: "teach dogs to walk Blog 1",
        text: "blah blah",
        image: "./images/blog-1.jpg",
        alt: "dog stuff with people",
        class: "blogImage",
        para: "the quick brown fox jumps over the lazy dog <br/> Everything in its right place"
    },
    {
        headline: "teach dogs to walk Blog 2",
        text: "blah blah",
        image: "./images/blog-2.jpg",
        alt: "dog stuff with people",
        class: "blogImage"
    },
    {
        headline: "teach dogs to walk Blog 3",
        text: "blah blah",
        image: "./images/blog-3.jpg",
        alt: "dog stuff with people",
        class: "blogImage",
        para: "the quick brown fox jumps over the lazy dog <br/> Everything in its right place"
    }
]; //array of objects

//console.log(blogs);


const blogsContainer = document.getElementById('blogs-container');

//the OG hard way
for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const dogArticle = document.createElement('article');
    dogArticle.setAttribute('class', 'blog-article');

        const dogImage = document.createElement('img');//the images are a child of the article above
        dogImage.setAttribute('src', blog.image);
        dogImage.setAttribute('alt', blog.alt);
        dogImage.setAttribute('class', blog.class);

        console.log(dogImage);
        dogArticle.appendChild(dogImage);
    //console.log(dogArticle);

    const textBox = document.createElement('div');
    textBox.setAttribute('class', 'blog-article__text-box')
    dogArticle.appendChild(textBox);

    const headline = document.createElement('h3');
    headline.setAttribute('class', 'blog-article__heading');
    headline.textContent = blog.headline;

    const para = document.createElement('p');
    headline.setAttribute('class', "blog-article__text");
    para.innerHTML = blog.para;
    textBox.appendChild(para);

    textBox.appendChild(headline);
    //console.log(blog.headline);
    //console.log(blogs[i]); //this would show you the blogs with that index. It would spit out headline and text.
    blogsContainer.appendChild(dogArticle)
}

//the faster way
for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const dogArticle = document.createElement('article');
    dogArticle.setAttribute('class', 'blog-article');

    const template = `
        <img src=${blog.image} alt=${blog.alt}>
        <div class='blog-article__text-box'>
            <h3 class="blog-article__heading">${blog.headline}</h3>
        </div>
    `;
    dogArticle.innerHTML = template;
    blogsContainer.appendChild(dogArticle)
}

