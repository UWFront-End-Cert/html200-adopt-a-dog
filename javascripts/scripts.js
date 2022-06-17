function dogInfo(x, y, z) {
  let info = (x + ': ' + y + '. Adoption Fee: ' + z);

  alert(info);
}

let lastTotal = 0;
function addFee() {
  lastTotal = lastTotal + 123.45;
}

$(function() {
  $('.adopt').on("click", function() {
    alert("Your total is $" + lastTotal.toFixed(2));
  });
});

$(function () {
  $('#total')
})

$(function() {
  $('.adopt').hover(
    function() {
    $(this).fadeTo('slow', .75)
    }, function() {
      $(this).fadeTo('fast', 1)
    }
  );
  $(".dog-card").hover(
    function() {
      $(this).css("box-shadow", "0 0 5px #00a3cc")
    }, function() {
      $(this).css("box-shadow", "none")
    }
  );
})
