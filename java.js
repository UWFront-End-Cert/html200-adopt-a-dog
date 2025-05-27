// alert dog's info when clicking on the dog's photo
function showInfo(name, breed, fee) {
    alert("Name: " + name +
        "\nBreed: " + breed +
        "\nFee: " + fee);
}

// Load total from sessionStorage 
let total = sessionStorage.getItem('total') 
    ? parseFloat(sessionStorage.getItem('total')) : 0;

const totalDisplays = document.getElementsByClassName('total-cost');

function updateTotalDisplays() {
  for (let i = 0; i < totalDisplays.length; i++) {
    totalDisplays[i].textContent = `$${total.toFixed(2)}`;
  }
}
updateTotalDisplays(); // update total on each page

// Add fee to total
let dogPrice = 0;

function clickAdopt(price) {
  dogPrice = price;
  document.querySelectorAll('.fee').textContent = dogPrice.toFixed(2);

    total += dogPrice;
    sessionStorage.setItem('total', total.toFixed(2)); // store in session

    updateTotalDisplays(); // update all matching elements
    alert(`Your current total fee: $${total.toFixed(2)}`); // alert the update total
}

// Reset the total after click submit button in checkout page
function resetTotal() {
  total = 0;
  sessionStorage.removeItem('total');
  updateTotalDisplays();
}




