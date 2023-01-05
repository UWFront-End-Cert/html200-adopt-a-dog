function dogInfo(name, breed, cost) {
  alert('About this dog:' + '\n' + 'Name: ' + name + '\n' + 'Breed: ' + breed + '\n' + 'Cost to adopt: ' + cost);
  };

let total = 0;

function adoptFees(x) {
  // let result = total + Number(x); 
  // alert(result);
  total += x;
  $('#total').text('$ ' + Number(total));
};

$(function(){
  $('.dogprofilecard').mouseenter(function(){
    console.log("Mouse Hover ON")
    $(this).fadeTo('slow', .75)
}).mouseleave(function(){
    console.log("Mouse Hover Off")
    $(this).fadeTo('fast', 1)
})
})