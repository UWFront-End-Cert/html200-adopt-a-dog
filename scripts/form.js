const submitFinal = document.getElementById('button-final');
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitFinal.appendChild(submitButton);

let total = 0;

$(document).ready(function () {
  $('#myForm').click(function myAdoption() {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    myAdoption();
    alert("Thank you. The form information has been received.");
  });
  });
  $('#myForm').click(function() {
    const x = document.getElementById('myForm');
    let text = ' ';
    for (let i = 0; i < x.length; i++) {
      if(x.elements[i].type == 'radio') {
        if(x.elements[i].checked == false) {
          continue;
        }
      }
      if(x.elements[i].value == undefined) {
        continue;
      }
      text += x.elements[i].name + ' : ' + x.elements[i].value + '\n';
    }
    console.log(text);
  });
});



// $('.adopt').click(function(){
//   total += Number($(this).data('price'));
//   alert('Your current total is $' + total);
// $('#checkout-2').text('$' + total);
