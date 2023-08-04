$(function(){
    console.log("DOM ready, load remaining javascript")

    const submitButton = document.createElement('input');
    submitButton.setAttribute('id', 'final');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');

    if(document.getElementsByTagName('form').length > 0){
        document.getElementsByTagName('form')[0].appendChild(submitButton);
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

            formValues.name = document.querySelector('input[name=applicantName').value;
            formValues.email = document.querySelector('input[name=applicantEmail]').value;
            formValues.address.street = document.querySelector('input[name=applicantStreetNumber').value;
            formValues.address.city = document.querySelector('input[name=addressCity]').value;
            formValues.address.state = document.querySelector('select[name=state]').value;
            formValues.address.zip = document.querySelector('input[name=addressZip]').value;
            formValues.experience = document.querySelector('input[name=exp]:checked').value;
            formValues.pickup = document.querySelector('select[name=location]').value;
            for (let j = 0; j < document.getElementsByClassName('review')[0].childElementCount; j++) {
                formValues.dogs[j] = document.getElementsByClassName('review')[0].getElementsByTagName('h2')[j].textContent;
            }
            console.log('displaying values submitted');
            console.log(formValues);
            alert('Thank you. The form information has been received.!');
        })
    }

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
