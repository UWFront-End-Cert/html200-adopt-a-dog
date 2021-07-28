let totalCost = 0;

function dogInfo(name, breed, fee) {
  alert(name + " (" + breed + ")" + "\n\nAdoption Fee: $" + fee);
}

function adoptTotal(fee) {
  alert('Your Adoption Total is: $' + (totalCost += fee));
  $("#cartCost").html("$ " + totalCost);
}
