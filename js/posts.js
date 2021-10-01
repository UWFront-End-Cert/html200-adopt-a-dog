const postData = [
  {
    title: "Teach Your Dog To Fetch!",
    content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    // content: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
    photo: "./images/blog/blog-1.jpg",
  },
  {
    title: "How To Walk Multiple Dogs",
    content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    photo: "./images/blog/blog-2.jpg",
  },
  {
    title: "Traveling With Your Dog",
    content: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    photo: "./images/blog/blog-3.jpg",
  },
];

const dogBlog = document.getElementById("blogArticles");
dogBlog.classList.add("main-container", "flex-container", "flex-start", "padding");

for (let i = 0; i < postData.length; i += 1) {
  const field = postData[i];

  const article = document.createElement("article");
  article.classList.add("flex-container", "margin-bottom");

  const columnLeft = document.createElement("div");
  columnLeft.classList.add("col-1-3-l");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("container-featured", "margin-bottom");

  const photo = document.createElement("img");
  photo.classList.add("photo");
  photo.src = field.photo;

  const columnRight = document.createElement("div");
  columnRight.classList.add("col-2-3-l");

  const title = document.createElement("h3");
  title.textContent = field.title;

  const content = document.createElement("p");
  content.textContent = field.content;

  dogBlog.appendChild(article);
  article.appendChild(columnLeft);
  columnLeft.appendChild(imageContainer);
  imageContainer.appendChild(photo);
  article.appendChild(columnRight);
  columnRight.appendChild(title);
  columnRight.appendChild(content);
}

function displayPosts() {
  var article = document.createElement("article");
  var textnode = document.createElement("h3");
  article.appendChild(textnode);
  document.getElementById("dogBlog").appendChild(article);
}
