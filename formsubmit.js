function myFunction() {
  let name = $("#name").val()
  let email = $("#email").val()
  let address = $("#address").val() + ", " + $("#city").val() + ", " + $("#state").val()
+ " " + $("#zip").val()

  let pickup = $("#location").val()

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Address: " + address);
  console.log("Pickup At: " + pickup);

}

$("button").click(myFunction)
$(document).ready(function(){
    $('input[id="yes"]').click(function(){
        if($(this).prop("checked") == true){
            console.log("This is a first Adoption.");
        }
    });
});
$(document).ready(function(){
    $('input[id="no"]').click(function(){
        if($(this).prop("checked") == true){
            console.log("This is not a first adoption.");
        }
    });
});
