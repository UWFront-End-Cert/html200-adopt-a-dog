const submitFinal = document.getElementById('button-final');
const submitButton = document.createElement('button')
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
submitFinal.appendChild(submitButton);

const form = document.getElementById('myForm');
// const e =  form.elements;
// for(let i = 0; i < e.length; i++) {
//   //ACCESS NODE LIST LIKE ARRAY
//   console.log(e[i]);
// }
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");
})

//radio button console log
//(x.elements[i].name + ' : ' + x.elements[i].value)
//if(x.elements[i].type == 'radio') {
//   if(x.elements[i].checked == false) {
//     continue;
//   }
// }

function myAdoption() {
  const x = document.getElementById('myForm');
  let text = ' ';
  for(let i = 0; i < x.length; i++) {
    text += x.elements[i].name + ' : ' + x.elements[i].value + '\n';
    console.log(text);
  }

}

// return kicks you out of the fucntion, break kicks you out of the loop, continue skips the rest of the code
