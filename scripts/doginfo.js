function dogInfo(name,breed,fee){
  let clicked_dog = "This dog is named" + " " + name + "." + " " + name + " is a " + breed + "." + " " + name + " costs " + fee + ".";
  alert(clicked_dog);
}

function dogAdopt(cost){
  var total_items = [];
  total_items.push(cost);
  var total = 0;
  for(let i = 0; i < total_items.length;i++){
    total += Number(total_items[i]);
  }
  var total_alert = 'Your total cost of adoption is ' + '$' + total + '.';
  alert(total_alert);
}
