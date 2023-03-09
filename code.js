const cards = $(".card");

cards.each(function () {
  const dogName = $(this).find(".dog-name").text();
  const dogBreed = $(this).find(".dog-breed").text();
  const dogPrice = $(this).find(".dog-price").text();

  $(this).find("img").click(() => {
    alert(`Dog Name: ${dogName}\n${dogBreed}\n${dogPrice}`);
  });
});

const buttons = $(".card-button");
let total = 0;

buttons.each(function () {
  $(this).click(function () {
    const cardContainer = $(this).parent().parent();
    const price = parseFloat(cardContainer.find(".dog-price").text().split("$")[1]);
    const dogName = cardContainer.find(".dog-name").text().trim();

    if ($(this).text() === "Adopt") {
      total += price;
      $(this).text("Remove");
      $(this).addClass("adopted");
      alert(`You've added ${dogName} to your cart. \n\nYour total is now $${total.toFixed(2)}`);
    } else {
      total -= price;
      $(this).text("Adopt");
      $(this).removeClass("adopted");
    }
    $(".cart-price p").text("$" + total.toFixed(2));
  });
});

const button = $('button');


button.css({
  'box-shadow': '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
  'transition': '0.3s'
});

button.hover(function () {
  $(this).css('box-shadow', '0 2px 4px 0 rgba(0, 0, 0, 0.35)');
}, function () {
  $(this).css('box-shadow', '0 2px 4px 0 rgba(0, 0, 0, 0.2)');
});

const card = $('.card');

card.hover(function () {
  $(this).addClass('hover');
}, function () {
  $(this).removeClass('hover');
});



const blogPosts = [
  {
    imgSrc: 'images/blog-1.jpg',
    imgAlt: 'woman sits with a dog',
    title: "Eating Your Dog's Food",
    content: "ASADA!! Tacos al pastor made with adobada meat. I think I’ve overdosed on tacos. Fish tacos with cabbage slaw and a side of chips and guac. Josh’s taco shack is the best taco shack. Give me tacos, or give me death. Can you put some peppers and onions on that? Say taco one more time. CARNE ASADA!! Carne asada on corn tortillas. Tacos, again? This will be 5 times this week and it’s only Tuesday. CARNITAS!!",
  },
  {
    imgSrc: 'images/blog-2.jpg',
    imgAlt: 'woman sits with a dog',
    title: "Eating Your Dog's Food",
    content: "ASADA!! Tacos al pastor made with adobada meat. I think I’ve overdosed on tacos. Fish tacos with cabbage slaw and a side of chips and guac. Josh’s taco shack is the best taco shack. Give me tacos, or give me death. Can you put some peppers and onions on that? Say taco one more time. CARNE ASADA!! Carne asada on corn tortillas. Tacos, again? This will be 5 times this week and it’s only Tuesday. CARNITAS!!",
  },
  {
    imgSrc: 'images/blog-3.jpg',
    imgAlt: 'dog yawning',
    title: "Eating Your Dog's Food",
    content: "ASADA!! Tacos al pastor made with adobada meat. I think I’ve overdosed on tacos. Fish tacos with cabbage slaw and a side of chips and guac. Josh’s taco shack is the best taco shack. Give me tacos, or give me death. Can you put some peppers and onions on that? Say taco one more time. CARNE ASADA!! Carne asada on corn tortillas. Tacos, again? This will be 5 times this week and it’s only Tuesday. CARNITAS!!",
  },
];

const blogPostsContainer = document.getElementById('blog-posts');
if (blogPostsContainer !== null) {

const title = document.createElement('h2');
title.textContent = "Bob Loblog's Dog Blog";
blogPostsContainer.appendChild(title);

blogPosts.forEach((post) => {
  const postDiv = document.createElement('div');
  postDiv.classList.add('row');

  const imgColumn = document.createElement('div');
  imgColumn.classList.add('column');

  const img = document.createElement('img');
  img.src = post.imgSrc;
  img.alt = post.imgAlt;

  imgColumn.appendChild(img);
  postDiv.appendChild(imgColumn);

  const textColumn = document.createElement('div');
  textColumn.classList.add('column');

  const title = document.createElement('h3');
  title.textContent = post.title;

  const content = document.createElement('p');
  content.textContent = post.content;

  textColumn.appendChild(title);
  textColumn.appendChild(content);
  postDiv.appendChild(textColumn);

  blogPostsContainer.appendChild(postDiv);
});
}

const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  alert(`Thank you. The form information has been received.`);
});