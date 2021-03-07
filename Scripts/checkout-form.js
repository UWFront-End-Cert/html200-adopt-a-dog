
const form = document.getElementById('checkoutForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");

  const formData = document.getElementById('checkoutForm').elements;
  
  for (let i = 0; i < formData.length - 1; i++) {
    const val = document.getElementById('checkoutForm').elements[i].value;
    console.log(val);
  }
  console.log(formData);
});
