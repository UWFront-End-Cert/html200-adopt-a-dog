function disableButton(id) {
	document.getElementById(id).disabled = true;
}

let eachFee = [];

function adopt(x) {
	/*if fee varies pass it through as a parameter - adopt(x,y)*/
	/*const fee = y*/
	const fee = 123.45;
	eachFee.push(fee);
	let total = eachFee.reduce(function (a, b) {
		return a + b;
	}, 0);
	alert(`Total: ${total.toFixed(2)}`);
	$("#total").text(`${total.toFixed(2)}`);
}

$('.info button').click(adopt);

$('.info button').click(
	function () {
		$(this).addClass('added-cart');
	});

/* obsolete
function adopt(x) {
	if (x === 'murphy') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'poppy') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'jack') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'duffy') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'lucas') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'jake') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'angus') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'violet') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'piper') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'maximus') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'luna') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	if (x === 'stella') {
		const fee = 123.45;
		eachFee.push(fee);
	}
	let total = eachFee.reduce(function (a, b) {
		return a + b;
	}, 0);
	alert(`Total: ${total}`);
}*/