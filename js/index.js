//document ready function

$(document).ready(function() {
  let total = 0;
  $('.cost').click(function() {

    total += 123.45;
    $('#total').text('$' + total);
    alert('Added to cart');
    event.preventDefault()
    return

  });
})
