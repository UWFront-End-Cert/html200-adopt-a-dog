let info = [];
const submit = $("#submit");

function submitEvent(event) {
	event.preventDefault();
	info.push($("#name").val());
	info.push($("#email").val());
	info.push($("#address").val());
	info.push($("#city").val());
	info.push($("#state").val());
	info.push($("#zip").val());
	info.push($("input:radio[name='New']:checked").val());
	info.push($("#location").val());
	console.log(info);
	alert("Thank you. The form information has been received");
}

$('form').on('submit', submitEvent);

/*const form = $("form");
const submit = $("#name");*/

/*function submitEvent(event) {
	event.preventDefault();
	info.push(document.getElementById('name').value);
	info.push(document.getElementById('email').value);
	info.push(document.getElementById('address').value);
	info.push(document.getElementById('city').value);
	info.push(document.getElementById('state').value);
	info.push(document.getElementById('zip').value);
	info.push(document.querySelector('input[name="New"]:checked').value);
	info.push(document.getElementById('location').value);
	console.log(info);
	alert("Thank you. The form information has been received");
}

form.addEventListener("submit", submitEvent);*/