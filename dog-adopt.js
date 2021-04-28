function adoptAlert(name, breed, adoptionFee) {
    let result = 'Adopt ' + name + ', a ' + breed + ', adoption fee of ' + adoptionFee;

    alert(result);
}

let total = 0;
let fee = 123.45;

function feeCalc(fee) {
        total += fee;

    alert("Added adoption fee of " + fee + " to your cart! Your cart total is $" + total);
    console.log(total);
}

$(".adopt-button-border").mouseenter(function(e){
      $(this).css("border:hover", "solid 3px #375218");
    }).mouseleave(function(){
      $(this).css("border:hover", "0");
    });



$(".adopt-button").first().click(function() {
  update( $("span").first() );
});

$(".adopt-button").last().click(function() {
  $(".adopt-button").first().trigger("click");
  update( $("span").last() );
});

function update(j) {
  let n=parseInt(j.text(), 1000);
  j.text(n + total);
}
