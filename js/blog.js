
  //  Adoptadog Blog Articles
  const blogSection = document.getElementsByClassName("blog-body");

  // Article A
  const articlePostA = document.createElement("article");
  articlePostA.setAttribute("class", "article");

  const imageA = document.createElement("img");
  imageA.setAttribute("src", "./images/blog-1.jpg");
  imageA.setAttribute("alt", "Woman and dog sitting, looking at the Grand Canyon");

  const articleAContent = document.createElement("div");
  articleAContent.setAttribute("class", "context");

  const articleATitle = document.createElement("h3");
  articleATitle.textContent = "Traveling With Your Dog";

  const articleAPar = document.createElement("p");
  articleAPar.setAttribute("class", "clean-text");
  articleAPar.textContent = "Quisque rhoncus iaculis neque, a gravida odio scelerisque eu. Maecenas scelerisque, justo in sollicitudin dapibus, sem elit vulputate orci, eu laoreet tellus metus sed ex. Proin suscipit posuere magna. Cras dictum non sapien sed fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec posuere nibh ac fermentum cursus. Maecenas porta, dui rutrum consequat sodales, odio lectus pellentesque felis, sed dictum tortor risus et odio. Nulla non nisi sed risus bibendum molestie. Duis mollis auctor sem.";

  articleAContent.appendChild(articleATitle);
  articleAContent.appendChild(articleAPar);

  articlePostA.appendChild(imageA);
  articlePostA.appendChild(articleAContent);

  // Article B
  const articlePostB = document.createElement("article");
  articlePostB.setAttribute("class", "article");

  const imageB = document.createElement("img");
  imageB.setAttribute("src", "./images/blog-2.jpg");
  imageB.setAttribute("alt", "Four dogs sitting, looking excited at handler");

  const articleBContent = document.createElement("div");
  articleBContent.setAttribute("class", "context");

  const articleBTitle = document.createElement("h3");
  articleBTitle.textContent = "Traveling With Your Dog";

  const articleBPar = document.createElement("p");
  articleBPar.setAttribute("class", "clean-text");
  articleBPar.textContent = "Quisque rhoncus iaculis neque, a gravida odio scelerisque eu. Maecenas scelerisque, justo in sollicitudin dapibus, sem elit vulputate orci, eu laoreet tellus metus sed ex. Proin suscipit posuere magna. Cras dictum non sapien sed fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec posuere nibh ac fermentum cursus. Maecenas porta, dui rutrum consequat sodales, odio lectus pellentesque felis, sed dictum tortor risus et odio. Nulla non nisi sed risus bibendum molestie. Duis mollis auctor sem.";

  articleBContent.appendChild(articleBTitle);
  articleBContent.appendChild(articleBPar);

  articlePostB.appendChild(imageB);
  articlePostB.appendChild(articleBContent);

  // Article C
  const articlePostC = document.createElement("article");
  articlePostC.setAttribute("class", "article");

  const imageC = document.createElement("img");
  imageC.setAttribute("src", "./images/blog-3.jpg");
  imageC.setAttribute("alt", "Woman and dog playing during sunset");

  const articleCContent = document.createElement("div");
  articleCContent.setAttribute("class", "context");

  const articleCTitle = document.createElement("h3");
  articleCTitle.textContent = "Traveling With Your Dog";

  const articleCPar = document.createElement("p");
  articleCPar.setAttribute("class", "clean-text");
  articleCPar.textContent = "Quisque rhoncus iaculis neque, a gravida odio scelerisque eu. Maecenas scelerisque, justo in sollicitudin dapibus, sem elit vulputate orci, eu laoreet tellus metus sed ex. Proin suscipit posuere magna. Cras dictum non sapien sed fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec posuere nibh ac fermentum cursus. Maecenas porta, dui rutrum consequat sodales, odio lectus pellentesque felis, sed dictum tortor risus et odio. Nulla non nisi sed risus bibendum molestie. Duis mollis auctor sem.";


  articleCContent.appendChild(articleCTitle);
  articleCContent.appendChild(articleCPar);

  articlePostC.appendChild(imageC);
  articlePostC.appendChild(articleCContent);

  //  Add to Blog Content Array
  let blogArticles = [];

  blogArticles.push(articlePostA);
  blogArticles.push(articlePostB);
  blogArticles.push(articlePostC);

  //  Generate on page via for loop
  for (let i = 0; i < blogArticles.length; i++) {
    blogSection[0].appendChild(blogArticles[i]);
  }
