$('form').on('submit', function() {
  event.preventDefault();
  console.log( $(this).serialize()
  );
});
