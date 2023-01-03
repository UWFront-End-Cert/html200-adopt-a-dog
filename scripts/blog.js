// Refactoring the blog page to generate the blog posts dynamically from JavaScript

// Defines Header
const header = document.querySelector('header');	

// Defines footer
const footer = document.getElementById("blog-footer");

// Creates title of blog
const title = document.createElement("h2");
title.textContent = "Adoptadog Blog";
title.id = "main-content";
title.className = "blog-title";
document.body.insertBefore(title, footer);

// Creates blog container
const container = document.createElement("div");
container.className = "blog-container";
document.body.insertBefore(container, footer);

// Creates objects for blogs
const blogs = [
  {
    imgSrc: "./images/blog-1.jpg",
    imgAlt: "owner and dog looking over a canyon",
    blogTitle: "Traveling With Your Dog",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",

  },
  {
    imgSrc: "./images/blog-2.jpg",
    imgAlt: "four leashed dogs in a fenced park area",
    blogTitle: "How To Walk Multiple Dogs",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  },
  {
    imgSrc: "./images/blog-3.jpg",
    imgAlt: "child owner holding a ball for dog at sunsent",
    blogTitle: "Teach Your Dog To Fetch!",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  }
];

// Loops objects
for (let x = 0; x < blogs.length; x += 1) {
    const object = blogs[x];

    const blogImage = document.createElement("div");
    blogImage.className = "blog-box1";
    container.appendChild(blogImage);

    const image = document.createElement("img");
    image.setAttribute("src", object.imgSrc);
    image.setAttribute("alt", object.imgAlt);
    image.className = "blog-box1";
    blogImage.appendChild(image);

    const blogText = document.createElement("div");
    blogText.className = "blog-box2";
    container.appendChild(blogText);

    const blogTitle = document.createElement("h3");
    blogTitle.textContent = object.blogTitle;
    blogText.appendChild(blogTitle);

    const p1 = document.createElement("p");
    p1.textContent = object.p1;
    p1.className = "blog-intro";
    blogText.appendChild(p1);

    const p2 = document.createElement("p");
    p2.textContent = object.p2;
    p2.className = "blog";
    blogText.appendChild(p2);
}
