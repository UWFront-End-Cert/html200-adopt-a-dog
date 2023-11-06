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
//adding CSS border to h2 header
$(function(){
      $("h2").css("border","2px dotted darkgrey")
      $("h3:first").css("border","1px solid blue")
});
//button ripple effect on onclick
$(document).ready(function(){
  $('button').click(function(e){
    $(this).append('<span></span>');
    var top = e.pageY;
    var left = e.pageX;
    $(this).children().offset({top:top, left:left}).fadeOut(500);
  });
});
//add to cart
var currentItems = 0;
$(document).ready(function(){
       $(".accordion-heading").click(function(){
             if($(".accordion-body").is(':visible')){  /* check the condition accordion-body is visible or not */
                 $(".accordion-body").slideUp(200);  /*if content is visible then close accordion-body with specific time duration */
               $(".plusminus").text('+')    /* add plus sign */
           }
           else{
               $(this).next(".accordion-body").slideDown(200); /*if content not visible then
                                                                                                           show the accordion-body */
               $(this).children(".plusminus").text('-');  /* add minus sign */
           }
       });
       $(".add-to-cart").click(function(){
           currentItems++;
           $(".cart-badge").text(currentItems);
       });
   });
