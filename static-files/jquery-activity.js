// === HOVER EFFECT ON DOG TILES
$(".dog-entry").hover(
    function(){
        $(this).css("border-color", "green"),
        $(this).css("box-shadow", "5px 10px green")
    },
    
    function(){
        $(this).css("border-color", "#ECECEC"),
        $(this).css("box-shadow", "none")
    }
)

// === TRACK CART TOTAL ===

$("#cart-total").text(0);

function calc_total(operation) {
    let total = parseFloat($("#cart-total").text());
    let price_of_adoptee = parseFloat(100);

    if (operation == "+"){
        total += price_of_adoptee;
    } else {
        total -= price_of_adoptee;
    }

    $("#cart-total").text(total);
    $("#just-for-good-measure").text(total);
}

// === CLICK EVENT ===
$(".add-to-cart").on("click", function(e){
        e.preventDefault();

        $(".added-to-cart").css("background-color", "blue");

        if($(this).text() == "Adopt"){
            $(this).text("In Cart");
            
            // --- tracking cart total
            calc_total("+");
        } 
        else {
            $(this).text("Adopt");
            
            // --- tracking cart total
            calc_total("-");
        }
    }
)