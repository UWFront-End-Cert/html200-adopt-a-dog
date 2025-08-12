const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');

    let form_input_question = document.querySelectorAll('input');
    let form_dropdown_question = document.querySelectorAll('select');
    let form_radio_question = document.querySelector('input[name="applicantFirstTimeAdopter"]:checked');
    
    console.log(form_input_question[0].getAttribute('name') +': '+ form_input_question[0].value + '\n' +
                form_input_question[1].getAttribute('name') +': '+ form_input_question[1].value + '\n' +
                form_input_question[2].getAttribute('name') +': '+ form_input_question[2].value + '\n' +
                form_input_question[3].getAttribute('name') +': '+ form_input_question[3].value + '\n' +
                form_dropdown_question[0].getAttribute('name') +': '+ form_dropdown_question[0].options[form_dropdown_question[0].selectedIndex].text + '\n' +
                form_input_question[4].getAttribute('name') +': '+ form_input_question[4].value + '\n' +
                form_radio_question.getAttribute('name') +': '+ form_radio_question.value + '\n' +
                form_input_question[7].getAttribute('name') +': '+ form_input_question[7].value  + '\n' +
                form_dropdown_question[1].getAttribute('name') +': '+ form_dropdown_question[1].options[form_dropdown_question[1].selectedIndex].text);
});