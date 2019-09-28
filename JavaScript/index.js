const blogs = [
    {
        imgSrc: 'images/blog-1.jpg',
        imgAlt: 'Woman hugging her dog at a canyon',
        idNum: 'blog-1',
        title: 'Traveling With Your Dog',
        p: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas' +
        ' doluptios dolupta tiandebis nem ut.',
        a: 'blog.html#blog-1'
    },
    {
        imgSrc: 'images/blog-2.jpg',
        imgAlt: 'Many dogs on seperate leashes all held by the same person',
        idNum: 'blog-2',
        title: 'How To Walk Multiple Dogs',
        p: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas' +
        ' doluptios dolupta tiandebis nem ut.',
        a: 'blog.html#blog-2'
    },
    {
        imgSrc: 'images/blog-3.jpg',
        imgAlt: 'A woman playing fetch with her dog with a beautiful sunset' +
        ' in the background',
        idNum: 'blog-3',
        title: 'Teach Your Dog To Fetch!',
        p: 'Iciustiam, et ad quiaes cum que excea sinciendi qui offic temquas' +
        ' doluptios dolupta tiandebis nem ut.',
        a: 'blog.html#blog-3'
    }
];

const root = document.querySelector('aside');

for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];

    const img = document.createElement('img');
    img.setAttribute('class', 'occupy-solo small-blog-image');
    img.setAttribute('src', blog.imgSrc);
    img.setAttribute('alt', blog.imgAlt);

    const h3 = document.createElement('h3');
    h3.textContent = blog.title;

    const p = document.createElement('p');
    p.textContent = blog.p;

    const a = document.createElement('a');
    a.setAttribute('class', 'link-to-blog');
    a.setAttribute('href', blog.a);
    a.textContent = 'Read more >>';

    const article = document.createElement('article');
    article.setAttribute('class', 'bottom-spacer');
    article.appendChild(img);
    article.appendChild(h3);
    article.appendChild(p);
    article.appendChild(a);

    root.appendChild(article);
}
