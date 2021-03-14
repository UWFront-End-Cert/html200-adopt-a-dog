// dog tile image enlarges on mouseover 
$('.dog-box').on({
  mouseenter: function () {
    $(this).animate({
      width: '110%',
      height: '110%x',
      top: '-=15px',
      left: '-=15px'
    }, 300);
  },
  mouseleave: function () {
    $(this).animate({
      width: '100%',
      height: '100%',
      top: '+=15px',
      left: '+=15px'
    }, 300);
  }
});

// button changes color onclick
$('button').click(function () {
  $(this).css("background-color", "#093c60");
  $(this).text("Adopting");
})

// click on dog image, alerts name, breed, price
function dogInfo(name, breed, price) {
  alert(name + ',' + ' ' + breed + ',' + ' ' + price);
}

let total = 0;

$('button')

function dogPrice(x) {
  total += x;
  alert('Total dog price: $' + total);
}

// click on Adopt button, alerts total of Adopt button clicks
// let total = 0;

// function priceTotal(price) {
//   total = price + total;
//   alert('Total:' + ' ' + '$' + total);
// }