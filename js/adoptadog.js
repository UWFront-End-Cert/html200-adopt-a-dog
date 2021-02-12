function dogInfo(name, breed, fee) {
    alert(name + ' is a ' + breed + ' and costs $' + fee + ' to adopt!');
    }

    let feeTotal = 0;

    function adoptionTotal(fee) {
      feeTotal = fee + feeTotal;
      alert('Total adoption fees: ' + '$' + feeTotal);
    }