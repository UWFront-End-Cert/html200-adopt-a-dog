//give each card an unique id
$('.dog-card').each(function(eachCounter){
    $(this).attr("id", "dog-"+parseInt(eachCounter+1));
  })

//creating hover effect
$('article.dog-card').hover(
  function(e){
    $(this).addClass('darkborder');
  }, function(){
    $(this).removeClass('darkborder')
  }
);


//add ripple effect to your button - I'm not the genius of this... was able to put this together with things I found online.
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clienty - (button.offsetTop + radius)}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

  button.appendChild(circle);

}

const buttons = $('button');
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
