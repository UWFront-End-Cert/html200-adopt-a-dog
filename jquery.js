//hover button effect
$(function(){
    $('p').hover(function(){
      $(this).css("background-color", "#FBFBFB");
      }, function(){
      $(this).css("background-color", "#E7E7E7");
    })

    $('img').mouseenter(function(){
      console.log("mouse has entered")
      $(this).fadeTo('show', .65)
    }).mouseleave(function(){
      console.log("mouse has left")
      $(this).fadeTo('fast', 2)
    })
})
