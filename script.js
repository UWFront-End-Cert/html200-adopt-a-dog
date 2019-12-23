
var arr = new Array();
function myFunction(name,breed,fee){
  alert("Name:"+name+"\nBreed:"+breed+"\nAdoption Fee:"+fee);
}

function getSum(total,num) {
  return total + Math.round(num);
}

function adoptFunction(item){
  var x = document.getElementById("price").childNodes[0].nodeValue;
  arr.push(x);

  for (var i = 0; i <= arr.length; i++) {
    total = +arr[i];
  }
  document.getElementById('demo').innerHTML = arr.reduce(getSum,0);
}
