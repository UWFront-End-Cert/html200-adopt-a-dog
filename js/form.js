const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function(e) {
e.preventDefault();
const result = 'Thank you. The form information has been received';
alert(result);
// const formData = document.getElementById('form').elements;
// console.log(formData);

// for (let i = 0; i < formData.length -1; i++){
//     const val = document.getElementById('form').elements[i].value;
//     const id = document.getElementById('form').elements[i].id;

//     console.log(id + ': ' + val);
    
// }
});

$('button').on('click', function() {
    const values = $('form').serializeArray();
    console.log(values);
  })

