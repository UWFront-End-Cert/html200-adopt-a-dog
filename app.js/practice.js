//select form element using jquery
let form = $('form');
//add click event to form for when you submit it all the user 
//inputs are logged to the console
$(function(e) {
    $('form').click('submit', function(e) {
        console.log(`Name: ${form.elements.name.value}, Email: ${form.elements.email.value}, 
     Address: ${form.elements.address.value}, City: ${form.elements.city.value}, State: ${form.elements.state.value},
     Zip: ${form.elements.zip.value}, First time Adopter?: ${form.elements.have_adopted_before.value}, Pickup: ${form.elements.pickup.value}`)
    })
})