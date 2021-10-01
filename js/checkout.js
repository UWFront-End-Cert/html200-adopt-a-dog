const fields = [
  {
    column: "col-1-1-l",
    label: "Full Name",
    formInput: "input",
    type: "text",
    name: "name",
    required: true,
    value: "Misty Fields",
  },
  {
    column: "col-1-1-l",
    label: "Email Address",
    formInput: "input",
    type: "email",
    name: "email",
    required: true,
    value: "misty@rainydays.com",
  },
  {
    column: "col-1-1-l",
    label: "Street Address",
    formInput: "input",
    type: "text",
    name: "street-address",
    required: true,
    value: "Main Street",
  },
  {
    column: "col-3-5-l",
    label: "City",
    formInput: "input",
    type: "text",
    name: "city",
    required: true,
    value: "Seattle",
  },
  {
    column: "col-1-5-l",
    label: "State",
    formInput: "input",
    name: "state",
    type: "text",
    required: true,
    value: "WA",
  },
  {
    column: "col-1-5-l",
    label: "ZIP Code",
    formInput: "input",
    name: "zip-code",
    type: "text",
    required: true,
    value: "55555",
  },
  {
    column: "col-3-5-l",
    label: "First-time Adopter",
    formInput: "input",
    name: ["first-time"],
    type: "radio",
    required: false,
    value: "no",
  },
  {
    column: "col-3-5-l",
    label: "Pick-up Location",
    formInput: "select",
    name: "pickup-location",
    type: "dropdown",
    required: false,
    class: "col-1-1",
    value: "Foster Home",
  },
  {
    column: "col-3-5-l",
    label: "Dogs Adopted",
    formInput: "select",
    name: "dogs-adopted",
    type: "select",
    required: false,
    value: "",
  },
];

const formContainer = document.getElementById("checkoutForm");
const form = document.createElement("form");
form.setAttribute("name", "form-checkout");
form.classList.add("flex-container", "checkoutForm");

for (let i = 0; i < fields.length; i += 1) {
  const field = fields[i];

  const column = document.createElement("div");
  column.classList.add(field.column);

  const label = document.createElement("label");
  label.textContent = field.label;
  label.setAttribute("for", field.name);

  const inputType = document.createElement(field.formInput);
  inputType.setAttribute("id", field.name);
  inputType.setAttribute("type", field.type);
  inputType.setAttribute("name", field.name);

  formContainer.appendChild(form);
  form.appendChild(column);
  column.appendChild(label);
  column.appendChild(inputType);

  // console log name of inputs
  console.log(field.value);
}

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.textContent = "Submit";
submitButton.classList.add("large");

form.appendChild(submitButton);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you. The form information has been received.");
});
