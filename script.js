function alertDogInfo(name, breed, cost){
    alert('Dog Name: ' + name + ', Breed: ' + breed + ', Adoption Cost: $' + cost);
}

let total = 0;
function adoptionTotal(cost){
    total += cost
    alert('The total adoption mount is: $' + total);
}