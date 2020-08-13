
window.onload = function(){
	var picture_elems = document.getElementsByClassName("list-pics");

	var purchase_elems = document.getElementsByClassName("adopt-btn");

	for(var i = 0; i < purchase_elems.length; i++){
		purchase_elems[i].addEventListener('click', function(){
			// get price of selected dog
			var dogPrice_str = this.parentElement.parentElement.getElementsByClassName('adopt-price')[0].textContent;
			var dogPrice_int = parseFloat(dogPrice_str.substring(1));
			//get current total price	
			var curTotalPrice_str = document.getElementsByClassName('header-price')[0].textContent;
			var curTotalPrice_int = parseFloat(curTotalPrice_str.substring(1));
			//total price information update
			var totalPrice = dogPrice_int + curTotalPrice_int;
			document.getElementsByClassName('header-price')[0].innerHTML = "$" + totalPrice;

			alert("Total Price:"+ totalPrice);
		})
	}
	//lesson6
	document.querySelectorAll(".showmore").forEach(function (p) {
  		p.querySelector("a").addEventListener("click", function () {
    		p.classList.toggle("show");
    		this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
  		});
	});
}

function alertDogInfo(name, breed, adoptionFee) {
		let txt = 'Name: ' + name + '\nBreed: ' + breed + '\nAdoption fee: ' + adoptionFee;
			alert(txt);
}

