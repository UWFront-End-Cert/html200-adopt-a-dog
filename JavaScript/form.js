const form = document.querySelector('form');

form.addEventListener('submit', function(event) {

    const responses = [
        document.getElementById('applicantName').value,
        document.getElementById('applicantEmail').value,
        document.getElementById('applicantAddress').value,
        document.getElementById('applicantCity').value,
        document.getElementById('applicantState').value,
        document.getElementById('applicantZip').value,
        document.getElementById('applicantFirst').value,
        document.getElementById('applicantPickup').value
    ];

    let pass = true;

    for (let i = 0; i < responses.length; i++) {
        res = responses[i];
        if (res == '') {
            pass = false;
        }
        if (i === 1 && !responses[i].includes('@')) {
            pass = false;
        }
    }

    if (pass) {
        for (let x = 0; x < responses.length; x++) {
            console.log(responses[x]);
        }
        event.preventDefault();
        alert('Thank you. The form information has been received.');
    } else {
        event.preventDefault();
        alert('You have not correctly filled out all responses! Form not' +
        ' submitted.');
    }
});
