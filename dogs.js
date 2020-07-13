console.log("Dogs are great");
totalcost = 0;
function alertDogInfo(dogname, dogcost, doginfo) {
  alert(dogname + '\n' + '$' + dogcost + '\n' + 'Breed: ' + doginfo);
}

function sumDogCost(dogcost)
{
  totalcost += dogcost;
  alert('Cost of your dogs so far: ' + totalcost);
}
