function dogInfo(name, breed, fee) {
  alert("Meet " + name + " the " + breed + "! Adoption Fee: $" + fee);
}

let totalCost = 0;

function adoptTotal(fee) {
  alert('Your Adoption Total is: $' + (totalCost += fee));
}
