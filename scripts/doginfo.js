function dogInfo(name,breed,fee){
  let clicked_dog = "This dog is named" + " " + name + "." + " " + name + " is a " + breed + "." + " " + name + " costs " + fee + ".";
  alert(clicked_dog);
}

var total_items = []; //this must be placed outside of function in order to have variables logged into the array, as inside the function, the array will constantly reset//
function dogAdopt(cost){
  total_items.push(cost);
  var total = 0;
  for(let i = 0; i < total_items.length; i++){
    total += Number(total_items[i]);
  }
  var total_alert = 'Your total cost of adoption is ' + '$' + total + '.';
  console.log(total);
  alert(total)
  alert(total_alert);
}
