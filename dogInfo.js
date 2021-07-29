let totalCost = 0;

function dogInfo(name, breed, fee) {
  alert(name + " (" + breed + ")" + "\n\nAdoption Fee: $" + fee);
}

function adoptTotal(fee) {
  let newTotal = (totalCost += fee);
  cartCost.innerHTML = ("$" + newTotal);
  alert( 'Your Adoption Total is: $' + newTotal );

}
