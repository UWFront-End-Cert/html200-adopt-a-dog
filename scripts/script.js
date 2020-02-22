/* Dog Info */
function showInfo(name,breed,fee) {
  let result = (name + ' is a ' + breed + ' and can be adopted for ' + fee + '.');
  alert(result);
}

let total = 0;
function addTotal(fee) {
  let result = ('Your total is $' + (total += fee));
  alert(result);
}


/* Checkout Form */
function submitInfo() {
    let entries1 = document.getElementsByTagName('input');
    let entries2 = document.getElementsByTagName('select');

    alert('Thank you! The form information has been received.');

    let a;
    for (a = 0; a < entries1.length; a++) {
    console.log(entries1[a].value);
    }

    let b;
    for (b = 0; b < entries2.length; b++) {
    console.log(entries2[b].value);
    }

/*  if (entries1[a].getAttribute("type") == 'radio') {
    console.log(Radio Button checked? ${entries1[a].checked} );
  } */
}
