function showDogInformation(dog, breed, price) {
    const description = 'You have clicked on ' + dog + '. That ' + breed + ' costs ' + price;
    alert(description);
}

let sum = 0;
function adoptDog(price) {
    sum = price + sum;
    //sum += price;
    alert('Total Price $' + sum);
}







