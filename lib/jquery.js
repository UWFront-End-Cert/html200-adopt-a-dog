//A hover effect that gives the tile an outline, or give it a box shadow.
$(".dogs").hover(function(){
    $(this).addClass("hoverborder");
}, function() {
    $(this).removeClass( "hoverborder");
  }
);

//Zooms in on the dog photo
$(".dog-image").hover(function(){
    $(this).fadeOut().fadeIn().addClass("dog-image-big");
}, function() {
    $(this).removeClass("dog-image-big");
  }
);

//Add a ripple effect to your button.
$('button').hover(function(){
    $(this).addClass("redbutton");
}, function() {
    $(this).removeClass( "redbutton");
})


//Use jQuery to update the checkout total on the index page with each click of an adopt button. This won't persist if you refresh or navigate to a new page, this is expected.