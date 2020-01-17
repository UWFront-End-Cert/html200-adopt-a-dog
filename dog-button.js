
let total = 0

function clickPhoto(name, breed, cost) {
  let result = "Dog name: " + name + " Breed: " + breed + " Fees: " + cost
  alert(result);
}

function dogFees(fee) {
   total = total + fee
alert('Total cost $' + total);
}

let divImage = document.createElement('div');
let image = document.createElement('img');
image.src = './images/blog-1.jpg';
image.alt = "a dog at the grand canyon";
image.style.width = "300px";
divImage.appendChild(image);
document.getElementById("full-blog").appendChild(divImage);

let blogTitle = document.createElement('h3');
let blogNode = document.createTextNode("Traveling with Dogs");
blogTitle.appendChild(blogNode);
document.getElementById("full-blog").appendChild(blogTitle);

let blogText = document.createElement('p')
let textNode = document.createTextNode("This is a paragraph of blog text. Traveling with your dog paragraph will go here. Typing one more sentence to test it out.")
blogText.appendChild(textNode);
document.getElementById("full-blog").appendChild(blogText);




const posts = [
  {
    name: 'Blog1',
    blogTitle: 'title-1',
    blogText: 'some blog text',
    image: './image/blog-1.jpg'
  },

  {
    name: 'Blog2',
    blogTitle: 'title 2',
    blogText:'some blog text',
    image: './image/blog-2.jpg'
  },

  {
    name: 'Blog3',
    title: 'Title 3'
  }

];

const postDiv = document.createElement('div');
document.body.appendChild(postDiv);

for (let i = 0; i < posts.length; i+= 1) {
  let post = posts[i];

const blogTitle = document.querySelector('#totale, h3');
blogTitle.textContent = ("Traveling with Doggo");
}

/*example from course video- doesn't seem to work
const postTitle = document.createElement('h3');
postTitle.textContent = 'Traveling with your Doggo';
const container = document.getElementsByClassName('blog')
document.body.insertBefore(postTitle, container);*/

/*how to build a form- could/should this be modified to make a blog-posting tool*/
const fields = [
  {
      name: 'full-name',
      label: 'Full Name'
  },
  {
      name: 'email',
      label: 'Email Address'
  }

];
/*create a form*/
/*creates a document called "form" and assign the result to ducument.createElement. pass in form as the tag we wnat to create*/
const form = document.createElement('form');
document.body.appendChild(form);
/* create a for loop that will iterate across the array. As long as i is less than fields.length, add 1 to i. Inside the for loop, create a label and assign the text content to the label value*/
for (let i = 0; i < fields.length; i+= 1) {
  const field = fields[i];
/*create a label and call it document.createElement*/
  const label = document.createElement('label');
  label.textContent = field.label;
  label.setAttribute('for', field.name); /*Set 'for' to the fieldname.This helps browser know which element this label is for*/
/*creates input field*/
  const input = document.createElement('input');
  input.setAttribute('id', field.name);/*give the input label an id for the label 'for'. Important this the id field.name matches*/
  /*append the label and the input to the form*/
  form.appendChild(label);
  form.appendChild(input);
}
/*need a way to submit the form. Create a submit button*/
const submitButton = document.createElement('button'); /*this creates the button*/
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

form.appendChild(submitButton);

/*to override the default behavior of the button, create an event handler*/
form.addEventListener('submit', function(event)  {
  event.preventDefault();
  alert('Form submitted!');
});
