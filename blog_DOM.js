// Lesson 8 (DOM Interaction with JavaScript) Assignment:  Refactor the blog page to generate the blog posts dynamically from JavaScript
let numOfPost = 0;

let post = {
  imageSrc: '',
  imageDescriptor: '',
  headline: '',
  text: ''
}

// initial button that prompts for a blog post
const buttonInitialPrompt = document.createElement('button');
buttonInitialPrompt.textContent = "Submit a Blog Post";
buttonInitialPrompt.setAttribute('type', 'submit');
document.querySelector('main').appendChild(buttonInitialPrompt);

// add a div to include form with 3 input fields and 2 buttons (Submit and Cancel)
const divForm = document.createElement('div');
divForm.setAttribute('id', 'divForm');
document.querySelector('main').appendChild(divForm);

buttonInitialPrompt.onclick = function() {
  buttonInitialPrompt.style.display = "none";
  createForm();
}

function createForm() {
  const form = document.createElement('form');

  // 3 availabe image options to select from
  const label = document.createElement('label');
  label.textContent = 'Image Source';
  form.appendChild(label);

  const select = document.createElement('select');
  select.setAttribute('name', 'img-select');

  const imageOptions = [
    'Man at canyon sitting with a dog',
    'Several leashed dogs on the street',
    'Woman and dog play in sunset'
  ];

  for (let i = 1; i <= imageOptions.length; i++) {
    const option = document.createElement('option');
    option.value = './images/blog-' + i + '.jpg';
    option.textContent = imageOptions[i - 1];
    select.appendChild(option);
  }

  form.appendChild(select);
  ////////////////////////////////////////

  const textInputFields = [
    {
      name: 'headline',
      label: 'Headline',
      type: 'text'
    },
    {
      name: 'text',
      label: 'Text',
      type: 'textarea'
    }
  ];

  for (let i = 0; i < textInputFields.length; i++) {
    const field = textInputFields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');
    input.setAttribute('id', field.name);
    input.setAttribute('type', field.type);
    input.setAttribute('size', 42);

    form.appendChild(label);
    form.appendChild(input);
  }

  divForm.appendChild(form);

  const buttonSubmitPost = document.createElement('button');
  buttonSubmitPost.textContent = 'Submit';
  divForm.appendChild(buttonSubmitPost);

  const buttonCancelPost = document.createElement('button');
  buttonCancelPost.textContent = 'Cancel';
  divForm.appendChild(buttonCancelPost);

  buttonSubmitPost.onclick = function() {
    post.imageSrc = select.options[select.selectedIndex].value;
    post.imageDescriptor = select.options[select.selectedIndex].textContent;
    post.headline = document.getElementById('headline').value;
    post.text = document.getElementById('text').value;

    if (post.headline == '' || post.text == '') {
      alert('Missing headline and/or text.');
    }
    else {
      alert('Thank you. The form information has been received.');

      buildPost();

      divForm.innerHTML = '';
      buttonInitialPrompt.style.display = "block";

      numOfPost++;
      console.log('Blog post ' + numOfPost + ' submitted.  Headline: ' + post.headline + '  Image: ' + post.imageSrc + '.');
    }
  }

  buttonCancelPost.onclick = function() {
    divForm.innerHTML = '';
    buttonInitialPrompt.style.display = "block";
  }
}

function buildPost() {
  const article = document.createElement('article');
  article.className = 'blog-post';
  document.querySelector('#div-display-blog').appendChild(article);

  const img = document.createElement('img');
  img.src = post.imageSrc;
  img.className = 'responsive-image';
  img.alt = post.imageDescriptor;
  article.appendChild(img);

  const divEmpty = document.createElement('div');
  article.appendChild(divEmpty);

  const h3 = document.createElement('h3');
  h3.textContent = post.headline;
  divEmpty.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = post.text;
  divEmpty.appendChild(p);
}
