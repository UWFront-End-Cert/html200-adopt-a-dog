$(document).ready(function () {

  // Variable
  let total = 0;

  // Hover effect on dog tiles
  $(".card").hover(function () {
    $(this).addClass("card-hover");
  }, function () {
    $(this).removeClass("card-hover");
  })

  // Click event on adopt tiles
  $(".btn-adopt").click(function () {
    total += 123.45;
    $("#total-cost").text(total.toFixed(2)); // track cart total
    alert("Total: $" + total.toFixed(2));
  })

  // Form data is handled
  $("#form").submit(function (e) {
    e.preventDefault();
    let data = $("#form :input").serializeArray();
    alert('Thank you. The form information has been received');
    console.log(data);
    $("#form")[0].reset();
    return false;
  })

})