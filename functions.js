function info(name, breed, fees) {
    alert(String(name + " is a " + breed + ". Their cost is " + fees + "."));
}

let total = 0;


function totalCalc(cost) {
    total = total + Number(cost);
    alert(total);
}

$(".grid-item").hover(onHoverInEffect, onHoverOutEffect)

$(".dogs-grid-item").hover(onHoverInEffect, onHoverOutEffect)

function onHoverInEffect() {
	// on hover add the highlight effect
	$(this).addClass("highlight")
}

function onHoverOutEffect() {
  // when they hover away remove the highlight
	$(this).removeClass("highlight")
}


let count = 0

function onClickIncrementCount() {
	// increment the count and set the text of the span to that value 
  count += 123.45
  // set text content using .text() method
	$(".count").text("$" + Math.round(count*100)/100 )
}

// set handler for counter button
$(".btn2").click(onClickIncrementCount)

function handleFormSubmit() {
    // get text for first and last name inputs then console.log the output
    // note - have to use .val() to get text content of input fields
      let firstName = $('#fname').val()
      let eaddress = $('#eaddress').val()
      let address = $('#address').val()
      let city = $('#city').val()
      let state = $('#state').val()
      let zip = $('#zcode').val()
      let firstTimeAdopterYes = $("#yes").prop("checked")
      let firstTimeAdopterNo = $("#no").prop("checked")
      let pickUpLoc = $('#loc').val()

      console.log('firstName = ' + firstName)
      console.log('email address = ' + eaddress)
      console.log('Street address = ' + address)
      console.log('city = ' + city)
      console.log('state = ' + state)
      console.log('zip = ' + zip)
      console.log('firstTimeAdopterYes = ' + firstTimeAdopterYes)
      console.log('firstTimeAdopterNo = ' + firstTimeAdopterNo)
      console.log('Pickup Location = ' + pickUpLoc)
  }
  
  // set handler for form data
  $('#submit').click(handleFormSubmit)
  