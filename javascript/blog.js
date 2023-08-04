$(function(){
    console.log("DOM ready, load remaining javascript")


const blogs = [
    {
        headline: 'Traveling With Your Dog',
        imageUrl: 'images/blog-1.jpg',
        imageAlt: 'young woman hugging her black dog while overlooking desert canyons and mesas',
        blogText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },

    {
        headline: 'How To Walk Multiple Dogs',
        imageUrl: 'images/blog-2.jpg',
        imageAlt: '4 dogs on leashes with a dogwalker offcamera, sitting on a brick sidewalk in the city',
        blogText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.'
    },

    {
        headline: 'Teach Your Dog To Fetch!',
        imageUrl: 'images/blog-3.jpg',
        imageAlt: 'picture at sunset with the silhouettes of a young woman holding a ball in her right arm, while looking down at her dog, who is looking back at her and the ball while sitting down',
        blogText: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. \n'
    },

];

for(let i=0; i < blogs.length; i++) {
    const blogEntry = blogs[i];
    const container = document.createElement('article');
    container.setAttribute('class', 'post')
    const image = document.createElement('img')
    image.setAttribute('src', blogEntry.imageUrl);
    image.setAttribute('alt', blogEntry.imageAlt);
    const textHolder = document.createElement('div')
    textHolder.setAttribute('class', 'postText')
    const blogTitle = document.createElement('h2');
    blogTitle.textContent = blogEntry.headline;
    const blogContent = document.createElement('p');
    const blogContent2 = document.createElement('p');
    blogContent.textContent = blogEntry.blogText;
    blogContent2.textContent = blogContent.textContent;
    textHolder.appendChild(blogTitle);
    textHolder.appendChild(blogContent);
    textHolder.appendChild(blogContent2);

    document.getElementsByTagName('h1')[0].appendChild(container);
    container.appendChild(image);
    container.appendChild(textHolder);
}
})