function dogInfo(dog, breed, cost) {
  const result = 'This dog is named ' + dog + '.  '+  dog + ' is a ' + breed + ' and will cost $' + cost +'.';
  alert(result);
}


let totalCost = 0;
function sumCost(cost) {
totalCost = parseFloat((cost + totalCost).toFixed(2)); 
alert('Total Adoption Fees: $' + totalCost);
}


