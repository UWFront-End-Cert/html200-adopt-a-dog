function myFunction(){
console.log($('input'));
}
$("input").click(function(e){
  $(".ripple").css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass("rippleEffect");  
});
