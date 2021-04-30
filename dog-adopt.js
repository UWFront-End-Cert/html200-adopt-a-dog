let total = 0;
let fee = 123.45;

function adoptAlert(name, breed, adoptionFee) {
    let result = 'Adopt ' + name + ', a ' + breed + ', adoption fee of ' + adoptionFee;

    alert(result);
}

function feeCalc(fee) {
        total += fee;

    alert("Added adoption fee of " + fee + " to your cart! Your cart total is $" + total);
    //console.log(total);

    $('#cartTotal').html(total);
}

$(".adopt-button-border").mouseenter(function(e){
      $(this).css("border:hover", "solid 3px #375218");
    }).mouseleave(function(){
      $(this).css("border:hover", "0");
    });
