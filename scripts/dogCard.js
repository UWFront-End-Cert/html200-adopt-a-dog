
function clickHandler(str) {
  alert(str);
}

  let total = 0;
  function adopt(price) {
  total = price + total;
  alert('Total $' + total.toFixed(2));

  $('.btn-adopt').click(function() {
    $('.div').text('$'+ total.toFixed(2));
  });
}

//hover event

$('.card').mouseover(function() {
  $('.dogcard').addClass('dog-image');
});

$('.card').mouseout(function() {
  $('.dogcard').removeClass('dog-image');
});
