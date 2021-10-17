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
    const input_radio = $("<input type='radio'>");

    $(form).append(form_row);
    $(form_row).addClass(value.colWidth + " col-1-1-s");
    $(form_row).append("<label>" + value.inputLabel + "</label>");
    $("label").attr("for", value.inputId);
    $(form_row).append(value.inputField);
    $("input").attr("name", value.inputId);
    $("input").attr("id", value.inputId);
    $("input").attr("type", value.inputType);
  });

  // radio buttons
  // const locations = ["Location 1", "Location 2", "Location 3"];
  // const pickupLoc = $("#test");

  // $.each(locations, function (i, value) {
  //   const option = $(pickupLoc).append(value);
  //   option.value = locations.value;
  //   option.text = locations.text;
  // });

  // $(function () {
  //   $("#reg").click(function () {
  //     if ($(form).is("type", "button"));
  //     else console.log("test");
  //   });
  // });

  // submit button
  $("form").submit(function (e) {
    e.preventDefault();
    alert("Submitted");
  });
  form.append("<button type='submit' form='checkout' value='Submit' class='col-1-2'>Submit</button>");
});
