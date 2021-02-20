// clickHandler named as dogInfo from 'img' 
function dogInfo(name, breed, cost) {
    alert(name, breed, cost);
}

// Click handler to 'adopt' button, it will accumulate and increase the numbers when clicking this button
let totalCost = 0;
function total(cost) {
    totalCost = cost + totalCost;
    alert('TOTAL: $' + totalCost);
}
