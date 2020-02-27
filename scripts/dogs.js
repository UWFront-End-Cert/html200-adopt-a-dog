$('.intro-img').hover(function(e)
{
  $('.intro-img').addClass('dog-zoom');
}, function(e) {
  $('.intro-img').removeClass('dog-zoom');
});

$('.dog-one, .dog-two, .dog-three, .dog-four, .dog-five, .dog-six, .dog-seven, .dog-eight, .dog-nine, .dog-ten, .dog-eleven, .dog-twelve, .dog-one-front, .dog-two-front, .dog-three-front, .dog-four-front, .dog-five-front, .dog-six-front').hover(function(e)
{
    $('img', this).addClass('tile-border');
}, function(e) {
    $('img', this).removeClass('tile-border');
});

$('button').click(function(e){
  alert("Dog has been added to your cart");
});
