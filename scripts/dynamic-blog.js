function generateH1() {
    const blogTitle = document.createElement('h1')
    blogTitle.innerHTML = 'Adopt a Dog Blog'
    blogTitle.className = 'blog-h1'

    const main = document.getElementById('blog-body')
    main.appendChild(blogTitle)
    
}

function createBlogStory(story) {
    const storyDiv = document.createElement('div')
    storyDiv.className = 'blog-sections'
   
    const main = document.getElementById('blog-body')
    main.appendChild(storyDiv)

    const blogImage = document.createElement('img')
    blogImage.className = 'blog-images'
    blogImage.src = story.imageSource
    blogImage.alt = story.alt
    
    storyDiv.appendChild(blogImage)
   

    const div = document.createElement('div')
    storyDiv.appendChild(div)

    const h2 = document.createElement('h2')
    h2.className = 'story-title'
    h2.innerHTML = story.title
    div.appendChild(h2)

    const p = document.createElement('p')
    p.className = 'first-paragraph'
    p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
    div.appendChild(p)

    const pSecond = document.createElement('p')
    pSecond.className = 'second-paragraph'
    pSecond.innerHTML = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
    div.appendChild(pSecond) 
}

const blog1 = {
    title: 'Traveling with your dog', 
    imageSource: 'images/blog-1.jpg',
    alt: 'Back view of woman with arm around dog overlooking canyon'
}

const blog2 = {
    title: 'How to walk with multiple dogs', 
    imageSource: 'images/blog-2.jpg',
    alt: 'Five dogs on leashes looking up a handler'
}

const blog3 = {
    title: 'Teaching your dog how to fetch', 
    imageSource: 'images/blog-3.jpg',
    alt: 'Silhoutte of dog and owner'
}


const blogPosts = [blog1, blog2, blog3]


function fillPage() {
    generateH1()
    for(let i = 0; i < 3; i++) {
        createBlogStory(blogPosts[i]) 
    }
}