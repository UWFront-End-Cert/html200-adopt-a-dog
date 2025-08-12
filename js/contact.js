const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    console.log(`Input name: ${input.name}, value: ${input.value}`);
  });

  alert("Thank you. The form information has been recieved.");
});
