
let totalCostArray = [];
function arraySummer(dogCost) {
totalCostArray.push (dogCost);

let summer = (cost, totalCost) => cost + totalCost;
totalCostArray.push(0);
let total = (totalCostArray.reduce(summer));
alert('Your total cost is $' + total);

}

function dogInfoSheetReturn(dogCost,dogName, dogBreed){
    alert('Your dog cost ' + '$' + dogCost + ' and is named ' + dogName + ' of the breed ' + dogBreed + '.');
}

 