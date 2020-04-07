$('.grid-item').hover(function(e) {
  $('div', this).toggleClass('tile-border')
});

$('.grid-item').hover(function(e) {
  $('p', this).toggleClass('colored-text')
});

$('button').click(function(e) {
  $('img', this).toggleClass('image-border')
});

$('form').submit(function() {
  alert("Form submitted successfully");
});

$('form').submit(function() {
  event.preventDefault();
  console.log( $( this ).serialize() );
});

var total = 0;

$('button').click(function(e) {
  total += 123.45;

  $('#cartTotal').text(total);
});
