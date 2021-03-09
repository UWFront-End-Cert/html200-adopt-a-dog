const form = document.getElementById('checkoutForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");

  const formData = document.getElementById('checkoutForm').elements;
  
  for (let i = 0; i < formData.length - 1; i++) {
    const val = document.getElementById('checkoutForm').elements[i].value;
    console.log(val);
  }

let firstAdopterYes = document.getElementById('yes');
let firstAdopterNo = document.getElementById('no');

if (firstAdopterYes.checked === true) {
  console.log('First Adopter: Yes');
} else if (firstAdopterNo.checked === true) {
  console.log('First Adopter: No');
  }
  console.log(formData);
});