function dogInfo(dogBio) {
  alert(dogBio);
}

let total = 0;

function myFee(fee) {
  total += fee;
  alert(total);
}

$(document).ready(function() {
  $('h3').click(function() {
    $('.card').fadeOut();
  });
  $('h3').click(function() {
    $('.card').fadeIn(1000, 'linear');
  });
});
