function dogInformation(name, breed, price) {
  alert(name + ',' + ' ' + breed + ',' + ' ' + price);
}

let amount = 0;

$('button')

function dogPrice(x) {
  amount += x;
  alert('Total dog price: $' + amount);
}

// zoom effect starts here:

$(document).ready(function(){
    $('.dog-photos').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });
});

// can also use fadeTo jquery
