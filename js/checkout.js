// prettier-ignore
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
    inputField: "<input type='text'>",
  },
  {
    colWidth: "col-3-5-m col-1-1-s",
    inputId: "city",
    inputLabel: "City",
    inputField: "<input type='text'>",
  },
  {
    colWidth: "col-1-5-m col-1-1-s",
    inputId: "state",
    inputLabel: "State",
    inputField: "<input type='text'>",
  },
  {
    colWidth: "col-1-5-m col-1-1-s",
    inputId: "zipCode",
    inputLabel: "ZIP Code",
    inputField: "<input type='text'>",
  },
  {
    colWidth: "col-3-5-m col-1-1-s",
    inputId: "firsttimeAdopt",
    inputLabel: "First-time Adopter",
    inputField: "<input type='radio'>",
  },
  {
    colWidth: "col-3-5-m col-1-1-s",
    inputId: "pickupLoc",
    inputLabel: "Pick-up Location",
    inputField: "<select>",
  },
];

$(document).ready(function () {
  // build form
  $("#checkoutForm").append("<form></form>").addClass("form-checkout");
  const form = $("form").addClass("flex-container").attr("id", "checkout");

  $.each(fields, function (i, value) {
    const form_row = $("<div class='form-row'></div>");

    $(form).append(form_row);
    $(form_row).addClass(value.colWidth + " col-1-1-s");
    $(form_row).append("<label>" + value.inputLabel + "</label>");
    $("label").attr("for", value.inputId);
    $(form_row).append(value.inputField);
    $("input").attr("name", value.inputId);
    $("input").attr("id", value.inputId);
    $("input").attr("type", value.inputType);
  });

  $(form).append("<div class='form-row col-1-1'><button type='submit' form='checkout' value='Submit' class='large col-1-2'>Submit</button></div>");

  // submit button
  $("form").submit(function (e) {
    e.preventDefault();
    alert("Submitted");
  });
});
