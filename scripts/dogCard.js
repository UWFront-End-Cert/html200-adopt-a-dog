
function clickHandler(str) {
  alert(str);
}

  let total = 0;
  function adopt(price) {
  total = price + total;
  alert('Total $' + total.toFixed(2));

  $('.btn-adopt').click(function() {
    $('.cart-total').text('$'+ total.toFixed(2));
  });
}
