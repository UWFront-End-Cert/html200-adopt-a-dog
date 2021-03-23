
function dogInfo(name, breed, cost) {
    alert(name + ',' + ' ' + breed + ',' + ' ' + price);
}


let totalCost = 0;

function dogCost(cost) {
    totalCost = cost + totalCost;
    alert('Total:' + ' ' + '$' + totalCost);

    $('#main-total').text(totalCost.toFixed(2));
};


// Hover effect on dog tiles
       $('.dog-card').hover(function(e){
           $(this).toggleClass('border');
       });
