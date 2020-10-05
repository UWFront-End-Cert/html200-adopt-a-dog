

$('.box5').hover(function(e) {
  $('img', this).addClass('tile-border');
}, function(e) {
  $('img', this).removeClass( 'tile-border' );
}
);

$('.box-3').hover(function(e) {
  $('img', this).addClass('tile-border');
}, function(e) {
  $('img', this).removeClass( 'tile-border' );
}
);

$(".dogs-button1 , .dogs-button").click(function(e) {
   {addToCart(123.45);}
});

let total = 0;
function addToCart(carttotal) {
  total += carttotal;
  alert("Shopping Cart Total: $" + total);
  document.getElementById ("cart-total").innerHTML = ("$" + total);
}


function doginfo(name, breed, fee) {

  result = name + breed + fee;

  alert(result);
}


function adoptionfee(fee) {

   result = fee

   alert(result);

 }
