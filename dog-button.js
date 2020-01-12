
let total = 0

function clickPhoto(name, breed, cost) {
  let result = "Dog name: " + name + " Breed: " + breed + " Fees: " + cost
  alert(result);
}

function dogFees(fee) {
   total = total + fee
alert('Total cost $' + total);
}

const fields = [
  {
      name: 'blog-title',
      label: 'Blog Title'
  },
  /*{
      name: 'email',
      label: 'Email Address'
  }*/

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
  alert('form submitted');
});

/*select an element on the page and store it in a variable*/
const header = document.querySelector('header')
/*then type the variable name, we can get content, attributes, stying for that variable*/
header.textContent
