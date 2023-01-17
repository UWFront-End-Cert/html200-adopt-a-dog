function CalculateTotal(x){
  let previousTotal =0;
  total = previousTotal + x;
  previousTotal = total;
  alert('New total: $'+total);
}

function dogInfo(x, y, z){
  let info = (x+": "+y+" breed, adoption fees: "+z);
  alert(info);
}
