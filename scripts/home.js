function dogInfo(dogBio) {
  alert(dogBio);
}

let total = 0;

$(document).ready(function() {
  $('.dog').click(function() {
    $(this).children('.card').fadeOut();
    $(this).children('.card').fadeIn(2000, 'linear');
  });
  $('.adopt').click(function(){
    total += Number($(this).data('price'));
    alert('Your current total is $' + total);
  $('#checkout-2').text('$' + total);
  });
});
