function info(name, breed, fees) {
    alert(String(name + " is a " + breed + ". Their cost is " + fees + "."));
}

let total = 0;


function totalCalc(cost) {
    total = total + Number(cost);
    alert(total);
}


document.getElementById("submit").addEventListener("click", submit);

var formVals = [];

function submit() {
    alert("Thank you. The form information has been received");
    formVals.push(document.getElementById("fname").value);
    formVals.push(document.getElementById("eaddress").value);
    formVals.push(document.getElementById("address").value);
    formVals.push(document.getElementById("city").value);
    formVals.push(document.getElementById("state").value);
    formVals.push(document.getElementById("zcode").value);
    formVals.push(document.getElementById("yes").value);
    formVals.push(document.getElementById("no").value);
    formVals.push(document.getElementById("loc").value);
    console.log(formVals);
}