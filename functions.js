function info(name, breed, fees) {
    alert(String(name + " is a " + breed + ". Their cost is " + fees + "."));
}

let total = 0;


function totalCalc(cost) {
    total = total + Number(cost);
    alert(total);
}

$(".grid-item").hover(onHoverInEffect, onHoverOutEffect)

$(".dogs-grid-item").hover(onHoverInEffect, onHoverOutEffect)

function onHoverInEffect() {
	// on hover add the highlight effect
	$(this).addClass("highlight")
}

function onHoverOutEffect() {
  // when they hover away remove the highlight
	$(this).removeClass("highlight")
}