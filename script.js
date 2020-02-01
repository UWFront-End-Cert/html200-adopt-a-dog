$(document).ready( function() {
  $(".card").hover( function() {
    $(this).addClass("highlight");
  }, function() {
    $(this).removeClass("highlight");
  });
});
var arr = new Array();
function myFunction(name,breed,fee){
  alert("Name:"+name+"\nBreed:"+breed+"\nAdoption Fee:"+fee);
}

/*Add cart total*/
let total=0;
function getSum(x) {
  total += x;
  alert('$'+total);
  $("#cart_total").text('$'+Number(total));
  }

$('.card').hover(
    function(){
      $(this).toggleClass('highlight');
    }
  );

/*Assignment Jquery*/
$("button").click(function (e) {

  // Remove any old one
  $(".ripple").remove();

  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;

  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});
