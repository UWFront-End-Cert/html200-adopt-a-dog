// Checkout Form alert
document.getElementById('checkoutForm').addEventListener("submit", function(event) {
    event.preventDefault(); 
    alert("Thank you. The form information has been received");
  
    const formData = {
      name: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      zip: document.getElementById("zip").value,
      firstTimeAdopter: document.querySelector("input[name='choice']:checked")?.value || "Not selected",
      pickup: document.querySelector("input[name='pickup']").value
  };
    
  console.log(formData);
  
  });