function showDogInformation(dog, breed, price) {
    const description = 'You have clicked on ' + dog + '. Adoption fees for this ' + breed + ' will cost: ' + price;
    alert(description);
}

let sum = 0;
function adoptDog(price) {
    sum = price + sum;
    alert('Total Price $' + sum);
}