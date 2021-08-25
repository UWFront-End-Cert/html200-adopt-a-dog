document.getElementById("submit").addEventListener("click", submit);

var formVals = [];

 function submit() {
     formVals.push(document.getElementById("name").value);
     formVals.push(document.getElementById("email").value);
     formVals.push(document.getElementById("address").value);
     formVals.push(document.getElementById("city").value);
     formVals.push(document.getElementById("state").value);
     formVals.push(document.getElementById("zcode").value);
     formVals.push(document.getElementById("yes").value);
     formVals.push(document.getElementById("no").value);
     formVals.push(document.getElementById("location").value);
     console.log("Javascript garthered this info -> " + formVals);
     alert("Thank you. The form information has been received");
 }
