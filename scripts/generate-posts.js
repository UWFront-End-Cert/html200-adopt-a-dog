
function createTitle() {
    const blogTitle = document.createElement('h3')
    blogTitle.innerHTML = 'Adoptadog Blog'
    blogTitle.className = 'blog-title'

    const main = document.getElementById('blog-main')
    main.appendChild(blogTitle)
    
}

function createBlogStory(story) {
    const storyDiv = document.createElement('div')
    storyDiv.className = 'blog-story'
   
    const main = document.getElementById('blog-main')
    main.appendChild(storyDiv)

    const blogImage = document.createElement('img')
    blogImage.className = 'blog-image'
    blogImage.src = story.imageSource
    blogImage.alt = story.alt
    
    storyDiv.appendChild(blogImage)
   

    const div = document.createElement('div')
    storyDiv.appendChild(div)

    const h4 = document.createElement('h4')
    h4.className = 'story-title'
    h4.innerHTML = story.title
    div.appendChild(h4)

    const p = document.createElement('p')
    p.className = 'intro-paragraph'
    p.innerHTML = 'Induciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recaptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeim faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat ad magnienecto volorent fugia nonsedi gendand itatquos as magnimpr aut molor autatia ad est officimus accae et omnia cus, od qui ate'
    div.appendChild(p)

    const pSecond = document.createElement('p')
    pSecond.className = 'intro-paragraph'
    pSecond.innerHTML = 'Induciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recaptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeim faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat ad magnienecto volorent fugia nonsedi gendand itatquos as magnimpr aut molor autatia ad est officimus accae et omnia cus, od qui ate'
    div.appendChild(pSecond) 
}

const story1 = {
    title: 'Traveling with your dog', 
    imageSource: '../images/blog-1.jpg',
    alt: 'woman with her dog'
}

const story2 = {
    title: 'How to walk with multiple dogs', 
    imageSource: '../images/blog-2.jpg',
    alt: '4 dogs on a leash'
}

const story3 = {
    title: 'Teaching your dog how to fetch', 
    imageSource: '../images/blog-3.jpg',
    alt: 'woman with a dog'
}

//story1.title 
const blogPosts = [story1, story2, story3]




function fillPage() {
    createTitle()
    for(let i = 0; i < 3; i++) {
        createBlogStory(blogPosts[i]) 
    }
}

