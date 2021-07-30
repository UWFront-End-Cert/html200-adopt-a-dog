



/* index page for dog description and total price */


function dogImagesDetails (dogInfo) {
  alert('My name is ' + dogInfo +  '; Dog Breed: Golden Retriever; $123.45');
}

let cartTotal = 0;
function dogTotal (dogPrice) {
  cartTotal = cartTotal + dogPrice;
  alert (cartTotal);
}


/* blog page */



const blogPage = document.getElementById('blog-head');
if (blogPage) {
  document.getElementById('blog-head').innerHTML='Adopt A Dog';
  document.getElementById('blog-head').style.backgroundColor="pink";
  document.getElementById('blog-head').style.fontWeight="bold";

  const footerTag = document.querySelector('footer');

  const image = document.createElement('img');
  image.setAttribute('src', 'images/blog-1.jpg');
  image.style.cssFloat = 'left';
  image.style.margin = '1rem 1rem 1rem 1rem';
  image.style.padding = '1rem 1rem 1rem 1rem';

  const title = document.createElement('h2');
  title.textContent = 'Traveling with your dog';
  title.style.color = '#283e60';
  title.style.textAlign = 'center';
  title.style.margin = '1rem 1rem 1rem 1rem';
  title.style.padding = '2rem 1rem 1rem 2rem';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Proin eget augue sed ex tempor convallis id nec leo. Quisque at ornare quam, vitae eleifend mi. Etiam euismod eros malesuada neque tincidunt feugiat convallis a magna. Cras et quam id felis sodales pulvinar. Nullam rutrum tortor ac diam pulvinar, vitae consequat nunc feugiat. Sed posuere justo finibus justo iaculis lacinia. Pellentesque vitae ligula nisl. Etiam dapibus nulla vel sem elementum, ac cursus purus faucibus. Nulla non sodales orci. Proin molestie in enim faucibus maximus. Morbi magna magna, tempus vitae sodales sed, scelerisque sit amet ligula.';
  paragraph.style.textAlign = 'center';
  paragraph.style.margin = '1rem 2rem 6rem 2rem';
  paragraph.style.padding = '1rem 2rem 7rem 1rem';


  document.body.appendChild(image);
  document.body.appendChild(title);
  document.body.appendChild(paragraph);
  document.body.insertBefore(image, footerTag);
  document.body.insertBefore(title, footerTag);
  document.body.insertBefore(paragraph, footerTag);

  const image2 = document.createElement('img');
  image2.setAttribute('src', 'images/blog-2.jpg');
  image2.style.cssFloat = 'left';
  image2.style.margin = '1rem 1rem 1rem 1rem';
  image2.style.padding = '1rem 1rem 1rem 1rem';

  const title2 = document.createElement('h2');
  title2.textContent = 'How to Walk Multiple Dogs';
  title2.style.color = '#283e60';
  title2.style.textAlign = 'center';
  title2.style.margin = '1rem 1rem 1rem 1rem';
  title2.style.padding = '4rem 1rem 1rem 2rem';

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = 'Proin eget augue sed ex tempor convallis id nec leo. Quisque at ornare quam, vitae eleifend mi. Etiam euismod eros malesuada neque tincidunt feugiat convallis a magna. Cras et quam id felis sodales pulvinar. Nullam rutrum tortor ac diam pulvinar, vitae consequat nunc feugiat. Sed posuere justo finibus justo iaculis lacinia. Pellentesque vitae ligula nisl. Etiam dapibus nulla vel sem elementum, ac cursus purus faucibus. Nulla non sodales orci. Proin molestie in enim faucibus maximus. Morbi magna magna, tempus vitae sodales sed, scelerisque sit amet ligula.';
  paragraph2.style.textAlign = 'center';
  paragraph2.style.margin = '1rem 2rem 6rem 2rem';
  paragraph2.style.padding = '1rem 2rem 7rem 1rem';

  document.body.appendChild(image2);
  document.body.appendChild(title2);
  document.body.appendChild(paragraph2);
  document.body.insertBefore(image2, footerTag);
  document.body.insertBefore(title2, footerTag);
  document.body.insertBefore(paragraph2, footerTag);

  const image3 = document.createElement('img');
  image3.setAttribute('src', 'images/blog-3.jpg');
  image3.style.cssFloat = 'left';
  image3.style.margin = '1rem 1rem 1rem 1rem';
  image3.style.padding = '1rem 1rem 1rem 1rem';

  const title3 = document.createElement('h2');
  title3.textContent = 'Traveling with your dog';
  title3.style.color = '#283e60';
  title3.style.textAlign = 'center';
  title3.style.margin = '1rem 1rem 1rem 1rem';
  title3.style.padding = '4rem 1rem 1rem 2rem';

  const paragraph3 = document.createElement('p');
  paragraph3.textContent = 'Proin eget augue sed ex tempor convallis id nec leo. Quisque at ornare quam, vitae eleifend mi. Etiam euismod eros malesuada neque tincidunt feugiat convallis a magna. Cras et quam id felis sodales pulvinar. Nullam rutrum tortor ac diam pulvinar, vitae consequat nunc feugiat. Sed posuere justo finibus justo iaculis lacinia. Pellentesque vitae ligula nisl. Etiam dapibus nulla vel sem elementum, ac cursus purus faucibus. Nulla non sodales orci. Proin molestie in enim faucibus maximus. Morbi magna magna, tempus vitae sodales sed, scelerisque sit amet ligula.';
  paragraph3.style.textAlign = 'center';
  paragraph3.style.margin = '1rem 2rem 6rem 2rem';
  paragraph3.style.padding = '1rem 2rem 7rem 1rem';


  document.body.appendChild(image3);
  document.body.appendChild(title3);
  document.body.appendChild(paragraph3);
  document.body.insertBefore(image3, footerTag);
  document.body.insertBefore(title3, footerTag);
  document.body.insertBefore(paragraph3, footerTag);
}



/*

const formCheck = document.getElementById('submitPop');
if (formCheck) {
  formCheck.addEventListener('click', function() {
  event.preventDefault();
  const allAnswers = [['Name: ' + document.getElementById('applicantName').value], ['Email: ' + document.getElementById('applicantEmail').value], ['Address: ' + document.getElementById('applicantAddress').value],['City: ' + document.getElementById('applicantCity').value], ['State: ' + document.getElementById('applicantState').value], ['Zip Code: ' + document.getElementById('applicantZipcode').value], ['Yes or No: ' + document.getElementById('checkboxYes').checked],  ['Pick Up Location: ' + document.getElementById('checkboxLocation').value], ['True is to buy Lucas: ' + document.getElementById('lucas').checked], ['True is to buy Duffy: ' + document.getElementById('duffy').checked]];
  console.log (allAnswers);
  });


const submit = document.getElementById('submitPop');
  submit.addEventListener('click', function() {
    event.preventDefault();
    alert('Thank you. The form information has been received.');
  });
}


*/






$(function () {
  console.log("DOM is ready!")
  $('nav').hide().delay(500).show('slow')


  $('img').mouseenter(function(){
    console.log('mouse has entered')
    $(this).css( "border-radius", "5em 5em 5em 5em" ).fadeTo('slow', .85)
  }).mouseleave(function(){
    console.log('mouse had left')
    $(this).css("border-radius", "0em").fadeTo('fast', 1)
  })


  $('a').mouseenter(function(){
    $(this).css("border-radius", "5em")
  }).mouseleave(function(){
    $(this).css("border-radius", "0em")
  })

  $('a').click(function(){
    $(this).css("background", "#1f1e2c")
  })

  $('#submitPop').click(function(){
    event.preventDefault();
    alert('Thank you. The form information has been received.')

    const name = $('#applicantName').val();
    const email = $('#applicantEmail').val();
    const address= $('#applicantAddress').val();
    const city = $('#applicantCity').val();
    const state = $('#applicantState').val();
    const zipcode= $('#applicantZipcode').val();
    const yesOrNo = $('input:radio[name=first-time-or-not]:checked').val();
    const location= $('#checkboxLocation').val();
    const adoptLucas = $('#lucas:checked').val();
    const adoptDuffy= $('#duffy:checked').val();
    console.log("Name: " + name + "; E-mail Address: " + email + "; Street Name: " + address + "; City: " + city + "; State: " + state + "; ZIP Code: " + zipcode + "; Yes or No: " + yesOrNo + "; Pick Up: " + location + "; Adopt: " + adoptLucas + "; Adopt: " + adoptDuffy);
  })

$(function(){
  $('.green-clickable').click(function(){
      event.preventDefault();
  $('#totalcost').html('Total: $' + cartTotal);
})})


})
