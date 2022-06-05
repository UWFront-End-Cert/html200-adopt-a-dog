const posts = [
    {
        headline:"Traveling With Your Dog",
        image:"images/blog-1.jpg",
        alt:"person hugging a dog overlooking canyon",
        summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
        tempor incididunt ut labore et dolore magna aliqua.",
        post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt\
        mollit anim id est laborum.",
    },

    {
        headline:"How to Walk Multiple Dogs",
        image:"images/blog-2.jpg",
        alt:"several dogs on leashes",
        summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
        tempor incididunt ut labore et dolore magna aliqua.",
        post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt\
        mollit anim id est laborum.",
    },

    {
        headline:"Teach Your Dog to Fetch!",
        image:"images/blog-3.jpg",
        alt:"dog waiting for owner to throw ball",
        summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
        tempor incididunt ut labore et dolore magna aliqua.",
        post:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint\
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt\
        mollit anim id est laborum.",
    },
];

const blog_container = document.getElementById('blog-posts');
for (i = 0; i < posts.length; i++) {
    // Create the article container
    let article = document.createElement('article');
    // Set the article attributes 
    article.setAttribute('class', 'post');

    // Create the image
    let image = document.createElement('img');
    // Set the image attributes
    image.setAttribute('src', posts[i].image);
    image.setAttribute('alt', posts[i].alt);

    // Append the image to the article
    article.appendChild(image);

    // Create the div for the title and text
    let div = document.createElement('div');
    
    // Title
    let title = document.createElement('h3');
    title.textContent = posts[i].headline;
    div.appendChild(title);
    
    // Paragraph
    let content = document.createElement('p');
    let node = document.createTextNode(posts[i].post);
    // Replace Text is blog posts are vertical
    if (blog_container.className == 'blog-posts-vertical') {
        node = document.createTextNode(posts[i].summary);
    }
    content.appendChild(node);
    div.appendChild(content);

    // Add link for vertical blog posts
    if (blog_container.className == 'blog-posts-vertical') {
        let link = document.createElement('a');
        let linkText = document.createTextNode('Read More >>');
        link.appendChild(linkText);
        link.href = "blog.html";
        div.appendChild(link);
    }
    article.appendChild(div);

    blog_container.appendChild(article);
  }
