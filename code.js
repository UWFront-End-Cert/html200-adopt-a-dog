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

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log(formData);
  });
});