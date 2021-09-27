const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
submitButton.classList.add("large");

form.appendChild(submitButton);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submitted!");
});
