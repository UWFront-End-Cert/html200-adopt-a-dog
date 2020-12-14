let total = 0;

function viewDogDetails(dogname, breed, cost) {
    alert(` Dog Name : ${dogname} \n Breed: ${breed} \n Cost to Adopt: $ ${cost}`);
}

function adoptButton(cost) {
    total = total + Number(cost);
    alert(`Total = $${total.toFixed(2)}`);
}

function checkoutSubmit(message) {
    alert(message);
    let nameValue = document.getElementById("nameValue").value;
    let emailValue = document.getElementById("emailValue").value;
    let addressValue = document.getElementById("addressValue").value;
    let cityValue = document.getElementById("cityValue").value;
    let stateValue = document.getElementById("stateValue").value;
    let pickupValue = document.getElementById("pickupValue").value;
    let zipcodeValue = document.getElementById("zipcodeValue").value;
    let firstTimeValueYes = document.getElementById("firstTimeValueYes").value;
    let firstTimeValueNo = document.getElementById("firstTimeValueNo").value;
    alert(nameValue);
    alert(emailValue);
    alert(addressValue);
    alert(cityValue);
    alert(stateValue);
    alert(pickupValue);
    alert(zipcodeValue);
    alert(firstTimeValueYes);
    alert(firstTimeValueNo);
  
}

$(function(){

    $( '.grid-item img' ).mouseenter(function() {
        $(this).animate({opacity: "1"});
        $(this).css('transform', 'scale(1.2)');
        

      }).mouseleave(function() {
        $(this).animate({opacity: "0.5"});
        $(this).css('box-shadow', '10px 10px 10px #888');
        $(this).css('transform', 'scale(1.0)');

      });

        $("button").click(function(){
            $(this).animate({opacity: "0.7"});
            $(this).css('background-color','blue');
            
        });
    
});