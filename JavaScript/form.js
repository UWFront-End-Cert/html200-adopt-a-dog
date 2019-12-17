$(document).ready(function(){
    $('#finished').click(function(e) {

        let responses = [
            $('#applicantName').val(),
            $('#applicantEmail').val(),
            $('#applicantAddress').val(),
            $('#applicantCity').val(),
            $('#applicantState').val(),
            $('#applicantZip').val(),
            $('input[name=first]:checked').val(),
            $('#applicantPickup').val()
        ];

        let pass = true;
        if (!responses[1].includes('@')) {
            pass = false;
        }
        for (let i = 0; i < responses.length; i++) {
            res = responses[i];
            if (res == '') {
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
});
