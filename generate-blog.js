const blogPosts = [
    {
        headline: "First Blog Post",
        imageUrl: "C:/Users/Owner/Desktop/html120/html200-adopt-a-dog/blog1.jpg",
        blogText: "This is the content for the first blog post."
    },
    {
        headline: "Second Blog Post",
        imageUrl: "C:/Users/Owner/Desktop/html120/html200-adopt-a-dog/blog2.jpg",
        blogText: "This is the content for the second blog post."
    },
    // Add more blog posts here as needed
];

function generateBlogPosts() {
    const blogContainer = document.getElementById('blog-container');

    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';

        postElement.innerHTML = `
            <h2>${post.headline}</h2>
            <img src="${post.imageUrl}" alt="Blog image">
            <p>${post.blogText}</p>
        `;

        blogContainer.appendChild(postElement);
    });
}

const dogs = [
    { name: 'Rex', image: 'C:/Users/Owner/Desktop/html120/html200-adopt-a-dog/rex.jpg' },
    { name: 'Buddy', image: "C:/Users/Owner/Desktop/html120/html200-adopt-a-dog/buddy.jpg" }
    // Add more dogs
];

function generateDogTiles() {
    const blogContainer = document.getElementById('blog-container');

    dogs.forEach(dog => {
        const tile = document.createElement('div');
        tile.className = 'blog-post';

        tile.innerHTML = `
            <h3>${dog.name}</h3>
            <img src="${dog.image}" alt="${dog.name}">
        `;

        blogContainer.appendChild(tile);
    });
}

// Call the function when the page loads
window.onload = () => {
    generateBlogPosts();
    generateDogTiles(); // optional, based on assignment
};

// Only one form submit event listener, with validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const formData = { name, email, message };
    alert("Thank you. The form information has been received");
    console.log(formData);
});