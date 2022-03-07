$(function(){

$('.tiles').mouseenter(function() {
  console.log("mouse has entered")
  $(this).fadeTo('slow', 0.80)
}).mouseleave(function() {
  console.log("mouse has left")
  $(this).fadeTo('fast', 1)
  })
})


  $(document).ready(function() {
    let finalPrice = 0
    $(".adoptbutton").click(function(e) {
      let price = $(".price")
      let cost = parseFloat(e.target.value)
      finalPrice = parseFloat(finalPrice + cost)
      console.log(finalPrice)
      price.html("$" + finalPrice)
    });

  });

  $(document).ready(function () {
    $("#name").click(function() {
      console.log("Anna Dzhurko");
    });
    $('#email').click(function() {
      console.log("andzhurko@gmail.com")
    });
    $('#address').click(function() {
      console.log("12345 Newcastle Way Pl")
    });
    $('#city').click(function() {
      console.log("Renton")
    })
    $('#zip').click(function() {
      console.log("98059")
    })
  })
