$(function(){
  console.log("DOM is ready, javascript loading")

  $('img').mouseenter(function(){
    console.log("mouse has entered")
    $(this).fadeTo('slow', .75)
  }).mouseleave(function(){
    console.log("mouse has left")
    $(this).fadeTo('fast', 1)
  })
})
$('.dogimages').hover(function(){
  $(this).addClass('imgzoom');
  }, function(){
  $(this).removeClass('imgzoom');
  });
