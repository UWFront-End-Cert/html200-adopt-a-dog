
//Using Vanilla Javascript for alert and array input in console.blog
//const form = document.getElementById('dogdataForm');

//$('form button').click(function(event){
  //event.preventDefault();
  //const checkoutFormData = form.elements;
  //const submitData = {};

  //for(i = 0; i < checkoutFormData.length-1; i++){
  //  const fieldData = form[i].value;
  //  const fieldName = form[i].id;
  //  console.log(`${fieldName}: ${fieldData}`);
  //  submitData[fieldName] = fieldData;   //Console log the values inside the form, you can build a string or build an object.
  //}
  //console.log(submitData);
//});


  $('form').submit(function(event){
    event.preventDefault();
    let checkoutFormData = $(this).serializeArray();
    console.log(checkoutFormData);

    $.each(checkoutFormData, function(i, field){
      let submitData =(field.name + ":" + field.value + " ");
      console.log(submitData);
    });

    alert('Thank you. The form information has been received.');

  });
