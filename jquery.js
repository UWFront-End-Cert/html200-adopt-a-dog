let total = 0;
$(document).ready(function(){
  $(".adopt").click(function(){
      total+=123.45;

      $("#cart-total").text(total);
      alert('Total: $' + total);
  });
  $("#dogs article").hover(function(){
    $(this).addClass("large-tile");
    }, function(){
    $(this).removeClass("large-tile");
  });

  // remove error class from input when changed
  const input = $("#submitCheckout input");
  const select = $("#submitCheckout select");

  $(input).change(function(){
    if ($(this).length != 0){
      $(this).removeClass("has-error");
    } else {
      $(this).addClass("has-error");
    }
  });

  $(select).change(function(){
    if ($(this).val() != "blank"){
      $(this).removeClass("has-error");
    } else {
      $(this).addClass("has-error");
    }
  });

  $("#submitCheckout input[type='submit']").click(function(e){
    e.preventDefault();
    $(input).each(function(){
      const valid = $(this).val();
      if (valid.length != 0){
        console.log($(this).val());
      } else {
        $(this).addClass("has-error");
      }
    });
    $(select).each(function(){
      const valid = $(this).val();
      if (valid != "blank"){
        console.log($(this).val());
      } else {
        $(this).addClass("has-error");
      }
    });

    if (input.hasClass("has-error")) {
      alert('Please fill out all required fields.')
    } else {
      alert('Thank you. The form information has been received.');
    }
  });
});
