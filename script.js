$(document).ready(function(){
  $(".card").hover(function(){
    $(this).addClass("highlight");
  },function(){
    $(this).removeClass("highlight");
  });
});
var arr = new Array();
function myFunction(name,breed,fee){
  alert("Name:"+name+"\nBreed:"+breed+"\nAdoption Fee:"+fee);
}
/*Add cart total*/
let total=0;
function getSum(x) {
  total += x;
  alert('$'+total);
  $("#cart_total").text('$'+Number(total));
  }

  $('.card').hover(
    function(){
      $(this).toggleClass('highlight');
    }
  );


const container = document.getElementById('container');
const heading = document.createElement('h1');
heading.textContent = 'Adoptadog Blog!';
var images = ['blog-1.jpg','blog-2.jpg','blog-3.jpg'];
var titles = ['Travelling With Your Dog','How To Walk Multiple Dogs','Teach Your Dog To Fetch!'];
for(let i=0;i<images.length;i++){
  const subContainer = document.getElementById('subContainer'+(i+1));
  console.log('subContainer:'+subContainer);
  const image = document.createElement('img');
  image.src = 'images/'+images[i];
  console.log('images/'+images[i]);
  subContainer.appendChild(image);
  const content = document.getElementById('content'+(i+1));
  const title = document.createElement('h3');
  const para = document.createElement('p');
  title.textContent = titles[i];
  para.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.';
  content.appendChild(title);
  content.appendChild(para);
  content.insertBefore(title,para);
  subContainer.appendChild(content);
  subContainer.insertBefore(image,content);
}

/*Assignment Jquery*/
$("button").click(function (e) {

  // Remove any old one
  $(".ripple").remove();

   Setup
  var posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight =  $(this).height();

  // Add the element
  $(this).prepend("<span class='ripple'></span>");

  if(buttonWidth >= buttonHeight) {
    buttonHeight = buttonWidth;
  } else {
    buttonWidth = buttonHeight;
  }

   Get the center of the element
  var x = e.pageX - posX - buttonWidth / 2;
  var y = e.pageY - posY - buttonHeight / 2;


   Add the ripples CSS and start the animation
  $(".ripple").css({
    width: buttonWidth,
    height: buttonHeight,
    top: y + 'px',
    left: x + 'px'
  }).addClass("rippleEffect");
});
