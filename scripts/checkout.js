$('#checkout_form').submit(function(event){
    event.preventDefault();
    alert('Thank you. The form information has been received');

    for (i = 0; i < form.elements.length; i++) {
        console.log(form.elements[i].name + ': ' + form.elements[i].value);
    }
})