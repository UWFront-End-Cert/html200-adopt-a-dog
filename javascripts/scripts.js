function dogInfo(x, y, z) {
  let info = (x + ': ' + y + '. Adoption Fee: ' + z);

  alert(info);
}

let lastTotal = 0;
function addFee() {
  lastTotal = lastTotal + 123.45;
  alert("Your total is $" + lastTotal.toFixed(2));
}

//$('.dog-img').mouseenter(function() {
//  console.log("hover over")
//  $(this).width(125%)
//})

$(function() {
  $('.adopt').hover(
    function() {
    console.log("mouse over")
    $(this).fadeTo('slow', .75)
    }, function() {
      console.log("mouse off")
      $(this).fadeTo('fast', 1)
    }
  );
  $(".dog-card").hover(
    function() {
      console.log("mouse in")
      $(this).css("box-shadow", "0 0 5px #00a3cc")
    }, function() {
      console.log("mouse out")
      $(this).css("box-shadow", "none")
    }
  );
})

//$('.dog-img').hover(function() {
//  $(this).animate({width: 125%,}, 'slow');
//});
