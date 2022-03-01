function dogInfo(x, y, z) {
  let info = (x + ': ' + y + '. Adoption Fee: ' + z);

  alert(info);
}

let lastTotal = 0;
function addFee() {
  lastTotal = lastTotal + 123.45;
  alert("Your total is $" + lastTotal.toFixed(2));
}
