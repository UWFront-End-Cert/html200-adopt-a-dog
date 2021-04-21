form.addEventListener('submit', function(event) {
    alert('Thank you, the form information has been received');
});

//add variables for input areas and call on variables in console.log//

function formInput () {
  const nameInput = document.getElementById("applicantName");
  const emailInput = document.getElementById('applicantEmail');
  const addyInput = document.getElementById('applicantAddress');
  const cityInput = document.getElementById('applicantCity');
  const stateInput = document.getElementById('applicantState');

  console.log(nameInput.value);
  console.log(emailInput.value);
  console.log(addyInput.value);
  console.log(cityInput.value);
  console.log(stateInput.value);
}
