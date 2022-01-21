function dogInfo(name, sex, breed, price) {
    let proper_pronoun = null;
    if (sex === "male") {
        proper_pronoun = "He";
    } else {
        proper_pronoun = "She";
    }
    alert("You opted to know more about " + name + ".\n" + 
        proper_pronoun + " is a " + breed + " and will cost " + 
        price + " in adoption fees.");
}


// Adoption fee total
let adoption_cost_array = [];

function dogAdoptionFee(price) {
    adoption_cost_array.push(price);

    let total_price = 0;
    for (let i = 0; i < adoption_cost_array.length; i++) {
        total_price += adoption_cost_array[i];
    }

    alert("The price to adopt this dog is " + price + ".\n" +
    "We will add this to your running total. So far you have opted to adopt " + adoption_cost_array.length + " dogs.\n\n" +
    "Current total to adopt selected dogs is " + total_price + ".\n\n" +
    "To reset the count, 'clear' your cart, just click on 'See More Dogs' button.");
    return false;
}

// Clear adoption fee total
function clearAdoption() {
    adoption_cost_array = [];
    alert("Your cart has been cleared.");
    return false;
}