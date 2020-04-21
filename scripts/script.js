function dogCardTotalOnClick(name, breed, dogPrice) {
    alert("This dog's name is " + name + " and its breed is " + breed + " and the adoption fees are: " + dogPrice);
}

let cartTotal = 0;

function dogCardPriceOnClick(dogPrice) {
    cartTotal = cartTotal + dogPrice;
    alert ("New price is " + cartTotal);
}