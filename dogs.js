//click adopt button, add to total
var theTotal = 0;
var adoptTotal = 123.45;

$('.button').click(function() {
   theTotal = Number(theTotal) + Number(adoptTotal);
   $('#subtotal').text("Total: $" + theTotal);
});

//hover effect on dog tiles
$('.dog-info-img').mouseenter(function(){
  $(this).animate({
    opacity: '0.85'
  });
});

$('.dog-info-img').mouseleave(function(){
    $(this).animate({
      opacity: '1'
    });
});

// click dog image and display name, breed, and fee
function murphyInfo() {
  alert("Murphy\nDog Breed\n$123.45");
}

function poppyInfo() {
  alert("Poppy\nDog Breed\n$123.45");
}

function jackInfo() {
  alert("Jack\nDog Breed\n$123.45");
}

function duffyInfo() {
  alert("Duffy\nDog Breed\n$123.45");
}

function lucasInfo() {
  alert("Lucas\nDog Breed\n$123.45");
}

function jakeInfo() {
  alert("Jake\nDog Breed\n$123.45");
}

function angusInfo() {
  alert("Angus\nDog Breed\n$123.45");
}

function violetInfo() {
  alert("Violet\nDog Breed\n$123.45");
}

function piperInfo() {
  alert("Piper\nDog Breed\n$123.45");
}

function maxInfo() {
  alert("Maximus\nDog Breed\n$123.45");
}

function lunaInfo() {
  alert("Luna\nDog Breed\n$123.45");
}

function stellaInfo() {
  alert("Stella\nDog Breed\n$123.45");
}
