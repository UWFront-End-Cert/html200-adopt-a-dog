const submitFinal = document.getElementById('buttonFinal');
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitFinal.appendChild(submitButton);

let total = 0;

$(document).ready(function () {
  $('#buttonFinal').click(function(e) {
    e.preventDefault();
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
    alert("Thank you. The form information has been received.");
  });
});
