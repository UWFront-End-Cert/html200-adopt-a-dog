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

const submitButton = document.createElement('input');
submitButton.setAttribute('id', 'final');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Submit');

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
});

