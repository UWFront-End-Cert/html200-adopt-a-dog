const footer = document.getElementById("blog-footer");

const title = document.createElement("h2");
title.textContent = "Adoptadog Blog";
title.class = "container";
title.className = "blog-title";
document.body.insertBefore(title, footer);

const container = document.createElement("div");
container.className = "blog-container";
document.body.insertBefore(container, footer);

const blogs = [
  {
    imgSrc: "images/blog-1.jpg",
    imgAlt: "A woman holds a black dog",
    blogTitle: "Traveling With Your Dog",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",

  },
  {
    imgSrc: "images/blog-2.jpg",
    imgAlt: "multiple dogs",
    blogTitle: "How To Walk Multiple Dogs",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  },
  {
    imgSrc: "images/blog-3.jpg",
    imgAlt: "A kid teach a dog to fetch",
    blogTitle: "Teach Your Dog To Fetch!",
    p1: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    p2: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  }
];


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

    const blogTitle = document.createElement("h2");
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
