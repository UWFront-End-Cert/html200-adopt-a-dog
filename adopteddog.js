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

  $('.dogcardbutton').mouseenter(function(){
    console.log('mouse has entered')
    $(this).fadeTo('slow', .75)
    $(this).text('Woof!')
  }).mouseleave(function(){
    console.log('mouse has left')
    $(this).fadeTo('fast', 1)
    $(this).text('Adopt')
  })


  $(function(){
    console.log('DOM is ready, javascript loading!')
    $('.ulnav').hide().delay(100).show('slow')
  })

  $('.dogs').mouseenter(function(){
    console.log('mouse has entered')
    $(this).css('box-shadow', 'inset 2px 2px 2px 2px blue');
  }).mouseleave(function(){
    console.log('mouse has left')
    $(this).css('box-shadow', 'none');
  })
