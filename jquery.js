$('.item2').mouseenter(function(){
  $(this).fadeTo('slow', .45)
}).mouseleave(function(){
  $(this).fadeTo('fast', 1)
})

$('.item1').mouseenter(function(){
  $(this).fadeTo('slow', .45)
}).mouseleave(function(){
  $(this).fadeTo('fast', 1)
})

$('.cardbutton').click(function(){
  $(this).css("background-color", "pink");
});
