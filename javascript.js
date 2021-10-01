let currentTotal = 0;

function doginfo(name, breed1, breed2, fee){
  alert(name+", "+breed1+" "+breed2+", "+fee);
}

function total(fee){
  currentTotal = currentTotal+fee;
  alert('Your current total is '+currentTotal);
}
