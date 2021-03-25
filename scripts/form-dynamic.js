
$('button').click(function () {
  $('form').submit(function() {
    alert("Thank you. The form information has been received.");
    console.log($(this).serializeArray());
 event.preventDefault();
  });
});




console.log(document.getElementById('checkoutform').value);

// document.getElementById('checkoutform').addEventListener('input', function() {
//     console.log(this.value);
// });



// function inputChange(e) {
//  console.log(document.getElementById("checkoutform").value);
// }

// var nameInput = document.getElementById('checkoutform');
//
// document.querySelector('form').addEventListener('submit', function (e) {
//
//     //prevent the normal submission of the form
//     e.preventDefault();
//
//     console.log(nameInput.value);
// });



// document.body.querySelectorAll('form [name]')
// .forEach(element => {
// console.log(element.name + '\:',  element.value);
// })

// console.log(document.getElementById('checkoutform').value);

// document.getElementById('name').addEventListener('input', function() {
//     console.log(this.value);
// });





// Assignment 8 code
// document.getElementById('formSubmitButton').addEventListener('click', function (e) {
//   event.preventDefault();
//   alert("Thank you. The form information has been received.");
// });
