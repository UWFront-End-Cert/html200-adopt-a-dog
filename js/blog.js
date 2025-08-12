const blogFields = [
  {
    imgSrc: "./images/blog-1.jpg",
    imgAlt: "back of girl with arm around dog at the grand canyon",
    title: "Traveling with your Dog",
    text: "Commodo irure elit ullamco duis ad amet cupidatat. Cillum reprehenderit occaecat amet ea ullamco anim officia nulla proident quis laborum dolore officia ex. Magna irure et elit commodo dolore ullamco ipsum magna aute exercitation non anim. Pariatur fugiat eiusmod culpa commodo amet nostrud excepteur reprehenderit duis consectetur. Deserunt aute cupidatat ea qui cillum pariatur quis incididunt. Reprehenderit non consectetur voluptate amet consequat consectetur laborum deserunt. Sunt et nostrud nulla id consequat id Lorem. Ad amet ex occaecat Lorem fugiat do et sunt id sint. Laborum non dolore voluptate in laborum anim enim laborum. Excepteur cillum dolor ullamco enim. Aliqua labore dolore ullamco et ad aute officia occaecat tempor eiusmod.",
  },

  {
    imgSrc: "./images/blog-2.jpg",
    imgAlt: "four dogs on leashes at the park",
    title: "How To Walk Multiple Dogs",
    text: "Commodo irure elit ullamco duis ad amet cupidatat. Cillum reprehenderit occaecat amet ea ullamco anim officia nulla proident quis laborum dolore officia ex. Magna irure et elit commodo dolore ullamco ipsum magna aute exercitation non anim. Pariatur fugiat eiusmod culpa commodo amet nostrud excepteur reprehenderit duis consectetur. Voluptate quis nisi ex sit laborum sit. Consequat aute laborum occaecat officia ex dolor irure tempor. Magna in mollit aliquip quis commodo consequat minim cupidatat labore aliquip proident quis. Velit est reprehenderit proident reprehenderit deserunt. Culpa ex reprehenderit amet sit.",
  },
  {
    imgSrc: "./images/blog-3.jpg",
    imgAlt: "silhouette of a girl holding a ball above a seated dog",
    title: "Teach Your Dog To Fetch",
    text: "Commodo irure elit ullamco duis ad amet cupidatat. Cillum reprehenderit occaecat amet ea ullamco anim officia nulla proident quis laborum dolore officia ex. Magna irure et elit commodo dolore ullamco ipsum magna aute exercitation non anim. Pariatur fugiat eiusmod culpa commodo amet nostrud excepteur reprehenderit duis consectetur. Nisi qui incididunt fugiat veniam amet non consectetur magna consequat ullamco nostrud nisi sit. Ullamco Lorem consectetur mollit ut voluptate. Deserunt nisi nulla laboris consequat magna cillum reprehenderit occaecat duis. Duis irure ad consectetur fugiat.",
  },
];

const blogPostCont = document.querySelector(".blog-post-container");

for (let i = 0; i < blogFields.length; i++) {
  const post = blogFields[i];

  const blogPost = document.createElement("div");

  const blogImage = document.createElement("img");
  blogImage.setAttribute("src", post.imgSrc);
  blogImage.setAttribute("alt", post.imgAlt);
  blogImage.setAttribute("width", 328);
  blogImage.setAttribute("height", 310);

  const blogTitle = document.createElement("h3");
  blogTitle.textContent = post.title;

  const blogText = document.createElement("article");
  blogText.innerHTML = post.text;

  blogPost.appendChild(blogImage);
  blogPost.appendChild(blogTitle);
  blogPost.appendChild(blogText);

  blogPostCont.appendChild(blogPost);
}
