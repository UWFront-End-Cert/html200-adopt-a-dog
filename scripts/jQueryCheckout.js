$('<input>').appendTo('form')
  .attr({type:'submit', name:'submit', value:'submit'});

$('form').submit(function(event) {
  event.preventDefault();
  alert('Thank you. Your info has been submitted.');
})

$('<input>').appendTo('form')
  .attr({type:'reset', name:'reset', value:'reset'});
