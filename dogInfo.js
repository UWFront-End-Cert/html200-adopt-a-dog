function dogInfo(name, breed, fee) {
  alert(name + " (" + breed + ")" + "\n\nAdoption Fee: $" + fee);
}

let totalCost = 0;

function adoptTotal(fee) {
  alert('Your Adoption Total is: $' + (totalCost += fee));
}
