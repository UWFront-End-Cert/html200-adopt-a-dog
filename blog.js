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

  let postImage = document.createElement("img");
  postImage.setAttribute("src", "./images/blog-1.jpg");
  postImage.setAttribute("alt", "Silhouette Of A Girl And Dog Playing Fetch At Twilight");
  postImage.setAttribute("class", "post-img");
  post.appendChild(postImage);

  const contentBox = document.createElement("div");
  post.setAttribute("class", "content-box");
  //insert the content box
  post.appendChild(contentBox);

  //const innerBox = document.createElement("div");
  //post.setAttribute("class", "inner-box");
  //contentBox.appendChild(innerBox);

  const textBox = document.createElement("div");
  textBox.setAttribute("class", "text-box")
  contentBox.appendChild(textBox);

  let header = document.createElement("h2");
  header.innerHTML = "Traveling with your dog";
  textBox.appendChild(header);

  let text = document.createElement("p");
  text.innerHTML = p1;
  text.setAttribute("id", "blog-text");
  header.appendChild(text);

}

post1();

let post2 = () => {
  //Make an individual post container
  const post = document.createElement("div");
  post.setAttribute("class", "blog-post");
  //Insert the container
  container.appendChild(post);

  let postImage = document.createElement("img");
  postImage.setAttribute("src", "./images/blog-2.jpg");
  postImage.setAttribute("alt", "Silhouette Of A Girl And Dog Playing Fetch At Twilight");
  postImage.setAttribute("class", "post-img");
  post.appendChild(postImage);

  const contentBox = document.createElement("div");
  post.setAttribute("class", "content-box");
  //insert the content box
  post.appendChild(contentBox);

  //const innerBox = document.createElement("div");
  //post.setAttribute("class", "inner-box");
  //contentBox.appendChild(innerBox);

  const textBox = document.createElement("div");
  textBox.setAttribute("class", "text-box")
  contentBox.appendChild(textBox);

  let header = document.createElement("h2");
  header.innerHTML = "Traveling with your dog";
  textBox.appendChild(header);

  let text = document.createElement("p");
  text.innerHTML = p1;
  text.setAttribute("id", "blog-text");
  header.appendChild(text);

}

post2();

let post3 = () => {
  //Make an individual post container
  const post = document.createElement("div");
  post.setAttribute("class", "blog-post");
  //Insert the container
  container.appendChild(post);

  let postImage = document.createElement("img");
  postImage.setAttribute("src", "./images/blog-3.jpg");
  postImage.setAttribute("alt", "Silhouette Of A Girl And Dog Playing Fetch At Twilight");
  postImage.setAttribute("class", "post-img");
  post.appendChild(postImage);

  const contentBox = document.createElement("div");
  post.setAttribute("class", "content-box");
  //insert the content box
  post.appendChild(contentBox);

  //const innerBox = document.createElement("div");
  //post.setAttribute("class", "inner-box");
  //contentBox.appendChild(innerBox);

  const textBox = document.createElement("div");
  textBox.setAttribute("class", "text-box")
  contentBox.appendChild(textBox);

  let header = document.createElement("h2");
  header.innerHTML = "Traveling with your dog";
  textBox.appendChild(header);

  let text = document.createElement("p");
  text.innerHTML = p1;
  text.setAttribute("id", "blog-text");
  header.appendChild(text);

}

post3();
