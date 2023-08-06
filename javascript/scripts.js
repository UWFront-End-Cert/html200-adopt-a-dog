$(function(){
    console.log("DOM ready, load remaining javascript")

    /* build a form */
    if($('h1').outerText = 'Checkout')
    {
        console.log("it's the checkout page, build, build, build");

        $form = $('<form method="GET"></form>');
        $name = $('<label for="name">Name<input type="text" name="applicantName" required></label>')
        $form.append($name);
        
        $email = $('<label for="email">Email Address<input type="email" name="applicantEmail" required></label>')
        $form.append($email);
        
        $streetNumber = $('<label for="streetNumber">Street Address<input id="streetNumber" type="text" name="applicantStreetNumber" required></label>');
        $city = $('<label for="city">City<input id="city" type="text" name="addressCity" required></label>');
        $state = $('<label for="state">State<select name="state" id="state" required><option value="">Please select a state.</option><option value="stateA">State A</option><option value="stateB">State B</option><option value="stateC">State C</option></select></label>');
        $zip = $('<label for="zip">Zip Code<input id="zip" type="number" name="addressZip" required></label>');
        $form.append($streetNumber);
        $form.append($city);
        $form.append($state);
        $form.append($zip);

        $experience = $('<fieldset class="experience"><legend>First Time Adopter?</legend><label for="expYes">Yes<input id="expYes" type="radio" name="exp" value="yes" required></label><label for="expNo">No<input id="expNo" type="radio" name="exp" value="no"></label>');
        $form.append($experience);

        $pickup = $('<label>Pickup Location <select name="location" required><option value="">Please select a location.</option><option value="locOne"> Location 1</option><option value="locTwo">Location 2</option><option value="locThree">Location 3</option></select></label>');
        $form.append($pickup);

        $cartReview = $('<h2>Dogs Adopted</h2><div class="review"><div class="doggoCart"><img src="images/lucas-card.jpg" alt="picture of Lucas on a leash and smiling at the photographer"><h2>Lucas</h2><p class="cost"><strong>Cost to Adopt:</strong> $123.45</p></div><div class="doggoCart"><img src="images/duffy-card.jpg" alt="picture of Lucas on a leash and smiling at the photographer"><h2>Duffy</h2><p class="cost"><strong>Cost to Adopt:</strong> $123.45</p></div></div><h2>Total Adoption Cost</h2><p>$1234.56</p>');
        $form.append($cartReview);

        $submit = ('<input type="submit" value="Submit" id="final">');
        $form.append($submit);

        $('footer').before($form);
    }

    $('form').on('submit', function(event ) {
        document.addEventListener('submit', function(event) {
            event.preventDefault();
            const formValues = {
                name: '',
                email: '',
                address: {
                    street: '',
                    city: '',
                    state: '',
                    zip: ''
                },
                experience: '',
                pickup: '',
                dogs: []
            };

            formValues.name = $('input[name="applicantName"]').val();
            formValues.email = $('input[name="applicantEmail"]').val();
            formValues.address.street = $('input[name="applicantStreetNumber"]').val();
            formValues.address.city = $('input[name="addressCity"]').val();
            formValues.address.state = $('select[name="state"]').val();
            formValues.address.zip = $('input[name="addressZip"]').val();
            formValues.experience = $('input[name="exp"]:checked').val();
            formValues.pickup = $('select[name="location"]').val();
            for (let j = 0; j < document.getElementsByClassName('review')[0].childElementCount; j++) {
                formValues.dogs[j] = document.getElementsByClassName('review')[0].getElementsByTagName('h2')[j].textContent;
            }
            console.log('displaying values submitted');
            console.log(formValues);
            alert('Thank you. The form information has been received.!');
        })
    })

})

let runningTotal = 0;

    function displayDogInfo(dogName, dogBreed, dogCost) {
        let cost = Number(dogCost)
        alert('This ' + dogBreed + ' is named '+  dogName + ' and will cost $' + cost + ' to adopt.');
    }

    function updateCartBalance(additionalCost) {
        console.log("trying to maths");
        let adder = Number(additionalCost);
        runningTotal = runningTotal + additionalCost;
        alert('Your current total adoption cost will be: $' + runningTotal);
    }

$(document).ready(function(){
    $('.doggo').mouseenter(function(){
        console.log("mouse entered")
        $('button').ripples({
            resolution: 512,
            dropRadius: 20,
            interactive: true,
            perturbance: 0.05,
        })
        $(this).find('img').fadeTo('fast', .1)
    }).mouseleave(function(){
        console.log("mouse left")
        $(this).find('img').fadeTo('slow', 1)
    })

    $('.adopt').on('click', function() {
        let newBalance = 0;
        let amountToAdd = Number($(this).parent().find('.cost').text().substring(16));
        newBalance = amountToAdd + Number($('#balance').text().substring(1));
        document.getElementById('balance').textContent = '$' + newBalance;
    })


})
