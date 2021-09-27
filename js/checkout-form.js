const fields = [
  {
    column: "col-1-1-l",
    label: "Full Name",
    formInput: "input",
    type: "text",
    name: "full-name",
  },
  {
    column: "col-1-1-l",
    label: "Email Address",
    formInput: "input",
    type: "email",
    name: "email",
  },
  {
    column: "col-1-1-l",
    label: "Street Address",
    formInput: "input",
    type: "text",
    name: "street-address",
  },
  {
    column: "col-3-5-l",
    label: "City",
    formInput: "input",
    name: "city",
    type: "text",
  },
  {
    column: "col-1-5-l",
    label: "State",
    formInput: "input",
    name: "state",
    type: "text",
  },
  {
    column: "col-1-5-l",
    label: "ZIP Code",
    formInput: "input",
    name: "zip-code",
    type: "text",
  },
  {
    label: "First-time Adopter",
    formInput: "input",
    name: "first-time",
    type: "radio",
  },
  {
    label: "Pick-up Location",
    formInput: "select",
    name: "pickup-location",
    type: "dropdown",
  },
];

const formContainer = document.getElementById("checkoutForm");
const form = document.createElement("form");
form.classList.add("flex-container", "form-checkout", "col-2-3-l");

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
}
