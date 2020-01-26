
let total = 0

function clickPhoto(name, breed, cost) {
  let result = "Dog name: " + name + " Breed: " + breed + " Fees: " + cost
  alert(result);
}

function dogFees(fee) {
   total = total + fee
alert('Total cost $' + total);
}
/*hover blue outline*/
$('.col-1').hover(function(e){
  $(this).addClass('tile-border');
})
$('.col-1').mouseleave(function(e){
  $(this).toggleClass('tile-border');
})

$('.button').click(function(){
  $('#total').text("total cost");
});


const posts = [
  {
    className: 'blog',
    title: 'Traveling with your Dog',
    blogText: 'Here is some blog text. duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium',
    imageSrc: './images/blog-1.jpg',
    imageAlt: 'a dog at the grand canyon'
  },

  {
    className: 'blog',
    title: 'How to Walk Multiple Dogs',
    blogText:'Here is some blog text. duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium',
    imageSrc: './images/blog-2.jpg',
    imageAlt:'multiple leashed dogs sitting'
  },

  {
    className: 'blog',
    title: 'Teach your dog to Fetch',
    blogText: 'Here is some blog text. duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium.',
    imageSrc: './images/blog-3.jpg',
    imageAlt:'dog and person at sunset'
  }

];

const postDiv = document.createElement('div');
document.body.appendChild(postDiv);

for (let i = 0; i < posts.length; i+= 1) {
  let post = posts[i];

  let blogTitle = document.createElement('h3');
  let blogNode = document.createTextNode(post.title);
  blogTitle.appendChild(blogNode);
  document.getElementById("full-blog").appendChild(blogTitle);

  let divImage = document.createElement('div');
  let image = document.createElement('img');
  image.src = post.imageSrc;
  image.alt = post.imageAlt;
  image.style.width = "30rem";
  divImage.appendChild(image);
  divImage.setAttribute("class", post.className);
  document.getElementById("full-blog").appendChild(divImage);



  let blogText = document.createElement('p');
  let textNode = document.createTextNode(post.blogText)
  blogText.appendChild(textNode);
  document.getElementById("full-blog").appendChild(blogText);
}

const fields = [
  {
      name: 'new-blog-post',
      label: 'Generate a new blog post by typing your content here.'
  },
  {
      name: 'your Name',
      label: 'Your Name'
  }


];
/*the blog entry form*/
const form = document.createElement('form');
document.body.appendChild(form);

for (let i = 0; i < fields.length; i+= 1) {
  const field = fields[i];

  const label = document.createElement('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name);

  const input = document.createElement('input');
  input.setAttribute('id', field.name);

  form.appendChild(label);
  form.appendChild(input);
}

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);


form.addEventListener('submit', function(event)  {
  event.preventDefault();
  let content = document.getElementsByTagName('form');
  let text = document.getElementById('new-blog-post').value;
  let text2 = document.getElementById('your Name').value;
  let i;

  console.log(text2 +' by ' + text);
  alert('Thank you. The form information has been received.');

});

let footer = document.querySelector('footer');
document.body.appendChild(footer);
