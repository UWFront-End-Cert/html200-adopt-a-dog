function dogImageAlert(dog, breed, price) {
    const description = 'This is ' + dog + '! This ' + breed + ' costs ' + price;
    alert(description);
}
let sum = 0;
function totalAdoptPrice(price) {
    sum = price + sum;
    alert('Total Cost $' + sum);
}

