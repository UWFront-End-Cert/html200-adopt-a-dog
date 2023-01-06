function dogInfo(name, breed, cost) {
  alert('About this dog:' + '\n' + 'Name: ' + name + '\n' + 'Breed: ' + breed + '\n' + 'Cost to adopt: ' + cost);
}

$(function(){
  $('.dogprofilecard').mouseenter(function(){
    console.log("Mouse Hover ON")
    $(this).fadeTo('slow', .75)
}).mouseleave(function(){
    console.log("Mouse Hover Off")
    $(this).fadeTo('fast', 1)
})
});

let total = 0;

function adoptFees(x) {
  total += x;
  $('#total').text('$ ' + Number(total));
};