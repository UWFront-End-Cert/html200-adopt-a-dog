function dogInfo(name, sex, breed, price) {
    let proper_pronoun = null;
    if (sex === "male") {
        proper_pronoun = "He";
    } else {
        proper_pronoun = "She";
    }
    alert("You opted to know more about " + name + ".\n" + 
        proper_pronoun + "is a " + breed + "and will cost " + 
        price + " in adoption fees.");
}


// Adoption fee total
let adoption_cost_array = [];

function dogAdoptionFee(price) {
    adoption_cost_array.push(price);

    let total_price = 0;
    for (let i = 0; i < adoption_cost_array.length; i++) {
        total_price + adoption_cost_array[i];
    }

    alert("Current total to adopting selected dogs is " + total_price + ".\n" +
    "To reset the count, 'clear' your cart, just double click any 'adoption' button.");
}

// Clear adoption fee total
function clearAdoption() {
    adoption_cost_array = [];
}