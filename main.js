const fee = 123.45;
let total = 0;

function dogInfo(name, breed, fee) {
  alert('Dog Name: ' + name + '\n' + 'Breed: ' + breed + '\n' +'Fee: ' + fee);
}

// jQuery - Lesson 9 Assignment, Use jQuery to effect on the dog tiles in some way
$('.tile').mouseenter(function(){
  $(this).find('img').addClass('img-transition')
  $(this).find('button').hide().fadeTo('slow', .5).fadeTo('slow', 1)
})

$('.tile').mouseleave(function(){
  $(this).find('img').removeClass('img-transition')
})
/////////////////////////////////////////////////////////////////////////////////

$('button').click(function(){
  total += Number(fee);

  alert('Total Fees: $' + total);

  $('#cart-value').text('$' + total);
})