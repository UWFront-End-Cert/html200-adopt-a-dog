//give each card an unique id
$('.dog-card').each(function(eachCounter){
    $(this).attr("id", "dog-"+parseInt(eachCounter+1));
  })

//creating hover effect
$('article.dog-card').hover(
  function(){
    $(this).addClass('darkborder');
  }, function(){
    $(this).removeClass('darkborder')
  }
);

//zooms on dog photo
$('article.dog-card img').hover(
  function zoomin(e){

  }, function zoomout(){

  }
);

//add ripple effect to your button
$('article.dog-card img').click(
  function(){

  }, function(){

  }
);
