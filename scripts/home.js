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
  $('.dog').click(function() {
    $('.card').fadeOut();
  });
  $('.dog').click(function() {
    $('.card').fadeIn(1000, 'linear');
  });
});
