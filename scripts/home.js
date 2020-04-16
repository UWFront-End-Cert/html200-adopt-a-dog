//
// function dogInfo(dogBio) {
//   alert(dogBio);
// }
//
// let total = 0;
//
// function myFee(fee) {
//   total += fee;
//   alert(total);
// }

$(document).ready(function() {
$('.card').hover(function() {
    $(this).css('border', 'solid #81b741 2px');
  }, function() {
    $(this).css('border', 'dashed #81b741 2px');
  });
});
