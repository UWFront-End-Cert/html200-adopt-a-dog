// prettier-ignore
// const fields = [
//   {
//     column: "col-1-1-l",
//     label: "Full Name",
//     formInput: "input",
//     type: "text",
//     name: "name",
//     required: true,
//     value: "Misty Fields",
//   },
//   {
//     column: "col-1-1-l",
//     label: "Email Address",
//     formInput: "input",
//     type: "email",
//     name: "email",
//     required: true,
//     value: "misty@rainydays.com",
//   },
//   {
//     column: "col-1-1-l",
//     label: "Street Address",
//     formInput: "input",
//     type: "text",
//     name: "street-address",
//     required: true,
//     value: "Main Street",
//   },
//   {
//     column: "col-3-5-l",
//     label: "City",
//     formInput: "input",
//     type: "text",
//     name: "city",
//     required: true,
//     value: "Seattle",
//   },
//   {
//     column: "col-1-5-l",
//     label: "State",
//     formInput: "input",
//     name: "state",
//     type: "text",
//     required: true,
//     value: "WA",
//   },
//   {
//     column: "col-1-5-l",
//     label: "ZIP Code",
//     formInput: "input",
//     name: "zip-code",
//     type: "text",
//     required: true,
//     value: "55555",
//   },
//   {
//     column: "col-3-5-l",
//     label: "First-time Adopter",
//     formInput: "input",
//     name: ["first-time"],
//     type: "radio",
//     required: false,
//     value: "no",
//   },
//   {
//     column: "col-3-5-l",
//     label: "Pick-up Location",
//     formInput: "select",
//     name: "pickup-location",
//     type: "dropdown",
//     required: false,
//     class: "col-1-1",
//     value: "Foster Home",
//   },
// ];

// $(document).ready(function () {
//   $("#checkoutForm").addClass("form-checkout").append("<form></form>");
//   $("form").addClass("flex-container");

//   $.each(fields, function (key, value) {
//     $("form").append("<div></div>");
//     console.log(key + ": " + value);
//   });
// });

var fields = [
  {
    colWidth: "col-1-1-l",
    inputId: "fullName",
    inputLabel: "Full Name",
    inputField: "<input></input>",
    inputType: "text"
  },
  {
    colWidth: "col-1-1-l",
    inputId: "emailAddress",
    inputLabel: "Email Address",
    inputField: "<input></input>",
    inputType: "email"
  },
  {
    colWidth: "col-1-1-l",
    inputId: "streetAddress",
    inputLabel: "Street Address",
    inputField: "<select></select>",
    inputType: "option"
  },
  {
    colWidth: "col-3-5-l",
    inputId: "city",
    inputLabel: "City",
    inputField: "<input></input>",
    inputType: "text"
  },
  {
    colWidth: "col-1-5-l",
    inputId: "state",
    inputLabel: "State",
    inputField: "<input></input>",
    inputType: "text"
  },
  {
    colWidth: "col-1-5-l",
    inputId: "zipCode",
    inputLabel: "ZIP Code",
    inputField: "<input></input>",
    inputType: "text"
  },
  {
    colWidth: "col-3-5-l",
    inputId: "firsttimeAdopt",
    inputLabel: "First-time Adopter",
    inputField: "<select></select>",
    inputType: ""
  },
  {
    colWidth: "col-3-5-l",
    inputId: "pickupLoc",
    inputLabel: "Pick-up Location",
    inputField: "<input></input>",
    inputType: "radio"
  }
];

$(document).ready(function () {
  $("#checkoutForm").addClass("form-checkout").append("<form></form>");

  $.each(fields, function (i, item) {
    $("form").addClass("flex-container").append("<div class='form-row'></div>");
    $(".form-row").append(item.inputId + "<br />");

    console.log(item.colWidth + ", " + item.inputLabel + ", " + item.inputField + ", " + item.inputType + ", " + item.inputId);
  });
});
