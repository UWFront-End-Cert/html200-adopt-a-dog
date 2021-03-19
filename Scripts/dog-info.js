// dog tile image enlarges on mouseover 
$('.dog-box').on({
  mouseenter: function () {
    $(this).animate({
      width: '110%',
      height: '110%x',
      top: '-=15px',
      left: '-=15px',
    }, 300);
  },
  mouseleave: function () {
    $(this).animate({
      width: '100%',
      height: '100%',
      top: '+=15px',
      left: '+=15px',
    }, 300);
  }
});

// button changes color and text onclick
$('button').click(function () {
  $(this).css("background-color", "#093c60");
  $(this).text("Adopting");
})

// click on dog image, alerts name, breed, price
function dogInfo(name, breed, price) {
  alert(name + ',' + ' ' + breed + ',' + ' ' + price);
}


let total = 0;

function dogPrice(price) {
  total = price + total;
  alert('Total:' + ' ' + '$' + total);

  $('#cartTotal').text(total.toFixed(2));
}

// click on Adopt button, alerts total of Adopt button clicks
// let total = 0;

// function priceTotal(price) {
//   total = price + total;
//   alert('Total:' + ' ' + '$' + total);
// }