const blogPosts = [
    {
        title: 'Traveling With Your Dog',
        content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium',
        img: 'images/blog-1.jpg',
        alt: "A woman sitting looking out over the Grand Canyon with a dog"
    },
    {
        title: 'How To Walk Multiple Dogs',
        content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium',
        img: 'images/blog-2.jpg',
        alt: "A woman sitting looking out over the Grand Canyon with a dog"
    },
    {
        title: 'Teach Your Dog To Fetch!',
        content: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium',
        img: 'images/blog-3.jpg',
        alt: 'A woman with long hair holding a ball for a dog, dog sitting ready'
    }]

for (i = 0; i < blogPosts.length; i++) {
    const blog = blogPosts[i];

    const blogContainer = document.getElementById('container-blog');
    console.log(blogContainer);

    console.log(blogPosts[i]);

    const blogArticle = document.createElement('article');
    blogArticle.setAttribute("class", 'blog-item');
    blogContainer.append(blogArticle);

    const blogImg = document.createElement('img');
    blogImg.setAttribute('src', blog.img);
    blogImg.setAttribute('alt', blog.alt);
    blogImg.setAttribute('class', 'blog-image');
    blogArticle.appendChild(blogImg);

    const blogContent = document.createElement('div');
    blogContent.setAttribute('class', 'blog-content')
    blogArticle.append(blogContent);

    const blogTitle = document.createElement('h2');
    blogTitle.setAttribute('class', 'blog-topic')

    blogTitle.setAttribute('class', 'blog-topic');
    blogContent.append(blogTitle);
    blogTitle.textContent = blog.title;
    console.log(blogTitle);

    const blogDivContainer = document.createElement('div');
    blogDivContainer.setAttribute('class', 'blog-text-info');
    blogContent.append(blogDivContainer);

    const blogText = document.createElement('p');
    blogText.textContent = blog.content;
    blogDivContainer.append(blogText);
};

