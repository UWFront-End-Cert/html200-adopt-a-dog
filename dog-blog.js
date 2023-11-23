const blogPosts = [
    {
        imgSrc: "images/blog-1.jpg",
        imgAlt: "person hugging a dog",
        heading: "Traveling with Your Dog",
        paragraph:"Lorem Ipsum" 
    },
    {
        imgSrc: "images/blog-2.jpg",
        imgAlt: "a person holding multiple dogs",
        heading: "How to Walk Multiple Dogs",
        paragraph:"Lorem Ipsum"
    },
    {
        imgSrc: "images/blog-3.jpg",
        imgAlt: "a person throwing a ball",
        heading: "Teach Your Dog To Fetch",
        paragraph:"Lorem Ipsum"
    }
]
const blogs = document.getElementById("blogs-container");

blogPosts.forEach((blog) => {

const blogArticle = document.createElement("article");
    blogArticle.className = "filler-text"
    blogs.appendChild(blogArticle);

    const blogImg = document.createElement("img");
    blogImg.setAttribute("src", blog.imgSrc);
    blogImg.setAttribute("alt", blog.imgAlt);
    blogArticle.appendChild(blogImg);

    const blogDiv = document.createElement("div");
    blogArticle.appendChild(blogDiv);

    const blogHeading = document.createElement("h2");
    blogHeading.className = "med-blue-header"
    blogHeading.textContent = blog.heading;
    blogDiv.appendChild(blogHeading);

    const blogText = document.createElement("p");
    blogText.textContent = blog.paragraph;
    blogDiv.appendChild(blogText);
});






















