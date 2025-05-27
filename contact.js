// Contact Form
document.getElementById('contactForm').addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you. The form information has been received");
  
    const dataInfo = {
      name: document.getElementById("name").value,
      lastName: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value
  };
  console.log(dataInfo);
  }) 
  