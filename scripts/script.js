function showInfo(name,breed,fee) {
  let result = (name + ' is a ' + breed + ' and can be adopted for ' + fee + '.');
  alert(result);
}

let total = 0;

function addTotal(fee) {
  let result = ('Your total is $' + (total += fee));
  alert(result);
}
