let Final = 0;

function AddtoCart(value) {
    Final = Final + value;
    console.log("Adding " + value + "to cart.  The total adoption fee is now: " + Final);
    $("#total").text("$ " + Final);
};

function Dog(Name,Breed,Fee) {
    console.log(Name + "(" + Breed + ") has an adoption fee of " + Fee);
};



