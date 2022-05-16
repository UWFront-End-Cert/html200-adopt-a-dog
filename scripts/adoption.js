function dogStats(name, breed, fees) {
    alert('Name: ' + name + '\nBreed: ' + breed + '\nAdoption Fees: $' + fees);
}

let total = 0.00;

function addTotal(fee) {
    total += fee;
    alert('Adoption Fee: ' + fee + ' has been added to cart.' + '\nTotal: $' + total);
}