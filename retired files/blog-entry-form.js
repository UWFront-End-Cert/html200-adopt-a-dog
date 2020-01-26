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
