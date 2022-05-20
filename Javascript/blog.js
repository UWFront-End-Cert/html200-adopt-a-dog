const blogPosts = [
    {
        image: 'images/blog-1.jpg',
        alt: 'Person and dark brown dog sitting by canyon',
        headline: 'Traveling With Your Dogs',
        blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        image: 'images/blog-2.jpg',
        alt: 'Husky, bloodhound, spotted dog, and Australian shephered on leashes at a park',
        headline: 'How to Walk Multiple Dogs',
        blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        image: 'images/blog-3.jpg',
        alt: 'Silhouette of person throwing a ball for a dog with sunset in the background',
        headline: 'Teach Your Dog to Fetch!',
        blogText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
]

const blogPostContainer = document.querySelector('.blog-container');

console.log('blog-container');

for(let i = 0; i < blogPosts.length; i++) {
    let image = document.createElement('img');
    let blogPost = document.createElement('article');

    image.setAttribute('src',blogPosts[i].image);
    blogPostContainer.appendChild(image);
    blogPost.innerHTML = '<h1 class="headline">' + blogPosts[i].headline + '</h1>' + '<p>' + blogPosts[i].blogText +'</p>';
    blogPostContainer.appendChild(blogPost);

    // console.log(image);
  }
