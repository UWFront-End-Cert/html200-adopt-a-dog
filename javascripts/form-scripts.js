$(function() {
  const form = document.getElementById('adoptForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you. The form information has been received.');
    for (i = 0; i < form.length; i++) {
      console.log(form.elements[i].value);
    }
  });
})
