function about(name, detail, price) {
	alert(`Name: ${name}
Breed: ${detail}
Fee: ${price}`);
}

$('.info').hover(function (e) {
	$('img', this).addClass('demonstration');
}, function (e) {
	$('img', this).removeClass('demonstration');
});


/* obsolete
  function about(x) {
	let info = []
	
	if (x === 'murphy') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'poppy') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'jack') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "beagle";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'duffy') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'lucas') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'jake') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "yellow lab";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'angus') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'violet') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "chocolate lab";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'piper') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'maximus') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'luna') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	if (x === 'stella') {
		const name = x.charAt(0).toUpperCase() + x.slice(1);
		const breed = "some breed";
		const fee = 123.45;
		info.push(name, breed, fee);
	}
	alert(info.join("\n\n"));
} */

/* $('.info').click(function(){
	$('img',this).addClass('demonstration'); });*/