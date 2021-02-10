// Create an array from .dog-card-details class
let dogArray = document.getElementsByClassName('dog-card-details');

// Total of Shopping Cart
let adoptionTotalString = document.getElementById('totals').innerText.substr(1);
let adoptionTotalNumber = parseFloat(adoptionTotalString);

// Get price of the selected card button and set the price
function priceRipper() {
  let specificPriceString = event.path[1].children[2].innerText;
  let specificPriceNumber = parseFloat(specificPriceString.substr(1));
  adoptionTotalNumber = adoptionTotalNumber + specificPriceNumber;
  alert('Total price of adoption: $' + adoptionTotalNumber);
  document.getElementById('totals').innerText = '$' + adoptionTotalNumber;
}

// When 'this' was the parameter in the handler it returned the button's elements
// Maybe I can go to it's siblings? Does it know the context? investigate later.
  // function priceRipper(e) {
  //   console.log(e);
  // }

//Alerts users of clicked dog picture
function infoRipper(dogName) {
  for (let i = 0; i < dogArray.length; i++){
    let dogFinder = dogArray[i].firstElementChild.innerText.toLowerCase();
    if (dogName === dogFinder) {
      alert(dogArray[i].innerText);
    }
  }
}
