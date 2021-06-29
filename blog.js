let p1 = "<p>Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p><p>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>";
let h1 = document.getElementsByTagName("h1")[0];
//Make container for all posts
const container = document.createElement("div");
container.setAttribute("class", "blog-all-posts");
//Insert the container
h1.appendChild(container);

let post1 = () => {
  //Make an individual post container
  const post = document.createElement("div");
  post.setAttribute("class", "blog-post");
  //Insert the container
  container.appendChild(post);

  //Add the title
  let title = document.createElement("h2");
  title.innerHTML = "Traveling with your dog";
  title.setAttribute("class", "blog-title");
  //Insert the title
  post.appendChild(title);

  //Add an image
  let img = document.createElement("img");
  img.setAttribute("src", "./images/blog-1.jpg");
  img.setAttribute("class", "blog-img");
  img.setAttribute("alt", "Woman And Dog Sitting Together Enjoying A Canyon View")
  //Insert the image
  title.appendChild(img);

  //Add the text
  let text = document.createElement("p");
  text.innerHTML = p1;
  text.setAttribute("class", "blog-text")
  //Insert the text
  title.appendChild(text);
}

post1();

let post2 = () => {
  //Make an individual post container
  const post = document.createElement("div");
  post.setAttribute("class", "blog-post");
  //Insert the container
  container.appendChild(post);

  //Add the title
  let title = document.createElement("h2");
  title.innerHTML = "Traveling with your dog";
  title.setAttribute("class", "blog-title");
  //Insert the title
  post.appendChild(title);

  //Add an image
  let img = document.createElement("img");
  img.setAttribute("src", "./images/blog-2.jpg");
  img.setAttribute("class", "blog-img");
  img.setAttribute("alt", "Dog Pack On Leashes Doing Good Sit In City Park");
  //Insert the image
  title.appendChild(img);

  //Add the text
  let text = document.createElement("p");
  text.innerHTML = p1;
  text.setAttribute("class", "blog-text")
  //Insert the text
  title.appendChild(text);
}

post2();

let post3 = () => {
  //Make an individual post container
  const post = document.createElement("div");
  post.setAttribute("class", "blog-post");
  //Insert the container
  container.appendChild(post);

  //Add the title
  let title = document.createElement("h2");
  title.innerHTML = "Traveling with your dog";
  title.setAttribute("class", "blog-title");
  //Insert the title
  post.appendChild(title);

  //Add an image
  let img = document.createElement("img");
  img.setAttribute("src", "./images/blog-3.jpg");
  img.setAttribute("class", "blog-img");
  img.setAttribute("alt", "Silhouette Of A Girl And Dog Playing Fetch At Twilight");
  //Insert the image
  title.appendChild(img);

  //Add the text
  let text = document.createElement("p");
  text.innerHTML = p1;
  text.setAttribute("class", "blog-text")
  //Insert the text
  title.appendChild(text);
}

post3();
