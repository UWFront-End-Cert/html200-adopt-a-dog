let total = 0;

function viewDogDetails(dogname, breed, cost) {
    alert(` Dog Name : ${dogname} \n Breed: ${breed} \n Cost to Adopt: $ ${cost}`);
}

function adoptButton(cost) {
    total = total + Number(cost);
    alert(`Total = $${total.toFixed(2)}`);
}