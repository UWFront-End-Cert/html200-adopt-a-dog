form.addEventListener('submit', function(event) {
      alert('Thank you, the form information has been received');
  });

 $("form").on("submit", function (event){
   event.preventDefault();
   console.log($(this).serialize());
 });
