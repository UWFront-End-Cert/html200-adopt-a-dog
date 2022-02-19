let checkoutTotal = document.getElementById("checkout-total");
let cost = document.getElementById("cost");
let total = 0;

// Function to add total dollars to check out. Figure out how to truncate the decimals to 2 places.
function addToCheckOutTotal(){
  total = total + Number(cost.value);
  checkoutTotal.textContent = "$" + total;
  alert("Your total is now: $" + total);
};



function murphy(){
  let name = document.getElementsByTagName("h4")[0].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function poppy(){
  let name = document.getElementsByTagName("h4")[1].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function jack(){
  let name = document.getElementsByTagName("h4")[2].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function duffy(){
  let name = document.getElementsByTagName("h4")[3].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function lucas(){
  let name = document.getElementsByTagName("h4")[4].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function jake(){
  let name = document.getElementsByTagName("h4")[5].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function angus(){
  let name = document.getElementsByTagName("h4")[6].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function violet(){
  let name = document.getElementsByTagName("h4")[7].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function piper(){
  let name = document.getElementsByTagName("h4")[8].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function maximus(){
  let name = document.getElementsByTagName("h4")[9].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function luna(){
  let name = document.getElementsByTagName("h4")[10].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};

function stella(){
  let name = document.getElementsByTagName("h4")[11].textContent;
  let breed = "Good Dog";
  alert("This dog is named " + name + " and their breed is " + breed + ". Their adoption cost is $" + cost + ".");
};





// Form submit for new blog post
const articleContainer = document.getElementById("blog-posts-container");
const postForm = document.getElementById("new-post-form");

postForm.addEventListener("submit", function(event){

  event.preventDefault();

  let blogTitle = document.getElementById("blog-title");
  let post = document.getElementById("blog-words");

  let articleImg = document.createElement("img");
  articleImg.setAttribute('src', 'images/blog-2.jpg');
  articleImg.setAttribute('class', 'blog-img');
  let artDiv = document.createElement("div");
  artDiv.setAttribute('class', 'blog-text');
  let articleTitle = document.createElement("h3");
  articleTitle.innerHTML = blogTitle.value;
  console.log(articleTitle);
  let articleContent = document.createElement("p");
  articleContent.innerHTML = post.value;
  console.log(articleContent);

  let newArticle = document.createElement('article');
  newArticle.appendChild(articleImg);
  newArticle.appendChild(artDiv);
  artDiv.appendChild(articleTitle);
  artDiv.appendChild(articleContent);
  articleContainer.insertBefore(newArticle, articleContainer.firstChild);

  alert("Thank you. The form information has been received.");
  blogTitle.value = '';
  post.value = '';

});