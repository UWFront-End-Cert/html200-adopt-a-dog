//create click handlers that alerts the dogs information when clickin on the dog's photo"
function dogInfo(dogName, breed, fees){
  alert(`To adopt ${dogName}, the ${breed}, it will cost ${fees}.`);
}

//create clickhandlers on each dog's button that will add to the total
let cartTotal = 0; //declare total outside of function so it can be added to each time the function is run

function totalCost(fee){
  cartTotal = cartTotal + fee;
  alert (`Your Total Adoption Cost is ${cartTotal}`);
}
