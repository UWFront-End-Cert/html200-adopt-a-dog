/*Form Submit*/
function drop() {
	alert('Thank you. The form information has been received');
}

const form = document.getElementById('form');
form.addEventListener('submit',drop);

jQuery(function($) {

  $("form :input").change(function() {
    console.log($(this).closest('form').serialize());
  });

});
