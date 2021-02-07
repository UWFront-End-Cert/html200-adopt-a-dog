function dogInfo(dog, breed, cost) {
    const result = 'This dog is named ' + dog + '.  '+  dog + ' is a ' + breed + ' and will cost ' + cost +'.';
    alert(result);
}

let sum = 0;
function sumCost(cost) {
   let totalCost = cost + sum;
    alert('Total Adoption Fees: $' + totalCost);
}