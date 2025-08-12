function dogInfo(name, breed, cost) {

    alert('Name: ' + name + '\nBreed: ' + breed + '\nAdoption Fees: ' + cost);

}


let totalCost =0;

function total(cost) {

    totalCost = cost + totalCost;

    alert('Total Cost: $'+ Math.round(totalCost).toFixed(2));
}