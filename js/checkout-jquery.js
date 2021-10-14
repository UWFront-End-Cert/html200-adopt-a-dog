const fields = [
  {
    colWidth: "col-1-1",
    inputId: "fullName",
    inputLabel: "Full Name",
    inputField: "<input type='text'>",
  },
  {
    colWidth: "col-1-1",
    inputId: "emailAddress",
    inputLabel: "Email Address",
    inputField: "<input type='email'>",
  },
  {
    colWidth: "col-1-1",
    inputId: "streetAddress",
    inputLabel: "Street Address",
    inputField: "<select></select>",
  },
  {
    colWidth: "col-3-5",
    inputId: "city",
    inputLabel: "City",
    inputField: "<input>",
    inputType: "text",
  },
  {
    colWidth: "col-1-5",
    inputId: "state",
    inputLabel: "State",
    inputField: "<input type='text'>",
    inputType: "text",
  },
  {
    colWidth: "col-1-5",
    inputId: "zipCode",
    inputLabel: "ZIP Code",
    inputField: "<input></input>",
    inputType: "text",
  },
  {
    colWidth: "col-3-5",
    inputId: "firsttimeAdopt",
    inputLabel: "First-time Adopter",
    // multiple choices
    inputField: "<select></select>",
    inputType: "",
  },
  {
    colWidth: "col-3-5",
    inputId: "pickupLoc",
    inputLabel: "Pick-up Location",
    inputField: "<input></input>",
    // multiple choices
    inputType: "radio",
  },
];

$(document).ready(function () {
  $("#checkoutForm").append("<form></form>").addClass("form-checkout");
  const form = $("form").addClass("flex-container");

  $.each(fields, function (index, value) {
    const form_row = $("<div class='form-row'></div>");
    const col_width = value.colWidth;
    const input_label = value.inputLabel;
    const input_field = value.inputField;
    // const input_id = value.inputId;

    $(form).append(form_row);
    $(form_row).addClass(col_width);
    $(form_row).append(input_label);
    $(form_row).append(input_field);
    // $(input_field).append("id=" + input_id);
  });
});
