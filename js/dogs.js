// show dog's info in an alert
let dogName = "";
let dogBreed = "";
let dogFee = 123.45;
let dogInfo = "";

function getDogInfo(dogName, dogBreed, dogFee) {
  dogInfo = dogName + ", " + dogBreed + ", " + dogFee;
  alert(dogInfo);
}

// add to total every time 'adopt' button is clicked
function feeAdder() {
  dogFee = dogFee + dogFee;
  alert(dogFee);
}
