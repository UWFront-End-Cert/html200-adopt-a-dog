
let dogsTotal = 0.00

function runningTotal(amount) {
    dogsTotal += amount;
    alert(dogsTotal);
}

function dogDetails(name, breed, cost) {
    alert('This is ' + name + ', ' + 'it is a ' + breed + ', ' + 'and costs ' + cost + ' to adopt.');
}