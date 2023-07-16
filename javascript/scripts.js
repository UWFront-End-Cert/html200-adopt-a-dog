let runningTotal = 0;

function displayDogInfo(dogName, dogBreed, dogCost) {
    let cost = Number(dogCost)
    alert('This ' + dogBreed + ' is named '+  dogName + ' and will cost $' + cost + ' to adopt.');
}

function updateCartBalance(additionalCost) {
    console.log("trying to maths");
    let adder = Number(additionalCost);
    runningTotal = runningTotal + additionalCost;
    alert('Your current total adoption cost will be: $' + runningTotal);
}