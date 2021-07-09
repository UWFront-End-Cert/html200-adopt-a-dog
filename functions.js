function info(name, breed, fees) {
    alert(String(name + " is a " + breed + ". Their cost is " + fees + "."));
}

let total = 0;


function totalCalc(cost) {
    total = total + Number(cost);
    alert(total);
}

$(".card").hover(onHoverInEffect, onHoverOutEffect);

function onHoverInEffect() {
	// on hover add the highlight effect
	$(this).addClass("highlight");
}

function onHoverOutEffect() {
  // when they hover away remove the highlight
	$(this).removeClass("highlight");
}


let totalCost = 0;

function onClickIncrementCount() {
	// increment the count and set the text of the span to that value
  totalCost += 123.45;
  // set text content using .text() method
	$(".cost").text("$" + Math.round(totalCost*100)/100 );
}

// set handler for counter button
$(".btn").click(onClickIncrementCount);
