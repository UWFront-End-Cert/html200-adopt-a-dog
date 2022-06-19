let total = 0.00;
// Format the to a currency
let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

function dogStats(name, breed, fees) {
    alert('Name: ' + name + '\nBreed: ' + breed + '\nAdoption Fees: ' + dollarUS.format(fees));
}

function addTotal(fee) {
    total += fee;
    alert('Adoption Fee: ' + dollarUS.format(fee) + ' has been added to cart.' + '\nTotal: ' + dollarUS.format(total));

    $('#cart-total').text(dollarUS.format(total))
}
