function dogInfo(dogBio) {
  alert(dogBio);
}

// let total = 0;
// //how do i put this function into jquery?
// function myFee(fee) {
//   total += fee;
//   alert(total);
// }

$(document).ready(function() {
  $('h3').click(function() {
    $('.card', this).fadeOut();
  });
  $('h3').click(function() {
    $('.card', this).fadeIn(2000, 'linear');
  });
});
//why isn't THIS working?
let total = 0;
$(document).ready(function() {
  $('.adopt').click(function myFee(fee){
    total += fee;
    alert(total);
  });
});

$(document).ready(function(){
  $('.checkout-2')
})

//$( "input[type=radio][name=baz]:checked" ).val();
//OR
// function displayVals() {
//   var singleValues = $( "#single" ).val();
//   var multipleValues = $( "#multiple" ).val() || [];
//   // When using jQuery 3:
//   // var multipleValues = $( "#multiple" ).val();
//   $( "p" ).html( "<b>Single:</b> " + singleValues +
//     " <b>Multiple:</b> " + multipleValues.join( ", " ) );
// }
//
// $( "select" ).change( displayVals );
// displayVals();
