function adoptAlert(name, breed, adoptionFee) {
    let result = 'Adopt ' + name + ', a ' + breed + ', adoption fee of ' + adoptionFee;

    alert(result);
}

let total = 0;
let fee = 123.45;

function feeCalc(fee) {
        total += fee;

    alert("Added adoption fee of " + fee + " to your cart! Your cart total is $" + total);
    console.log(total);
}
