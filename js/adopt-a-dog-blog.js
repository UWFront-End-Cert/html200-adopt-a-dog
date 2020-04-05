const fields = [
    {
        name: 'title',
        label: 'Title'
    },
    {
        name: 'image',
        label: 'Image Link'
    },
    {
        name: 'text',
        label: 'Blog Text'
    }
];

const form = document.createElement('form');

document.body.appendChild(form);

for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    const label = document.createElement('label');
    label.setAttribute('for', field.name);
    label.textContent = field.label;

    const inputField = document.createElement('input');
    inputField.setAttribute('id', field.name);

    form.appendChild(label);
    form.appendChild(inputField);

}

var formInput = document.getElementsByTagName('form');

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';
form.appendChild(submitButton);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you. The form information has been received.');

    console.log(document.getElementById(formInput).value);
});

//create blog title with attributes

var title = document.createElement('h2');
title.textContent = 'Traveling with your dog';

//create text
var text = document.createElement('p');
text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie. Fusce id velit ut tortor pretium viverra suspendisse potenti. Suscipit tellus mauris a diam maecenas. Odio tempor orci dapibus ultrices in. Tellus pellentesque eu tincidunt tortor. Turpis cursus in hac habitasse platea. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. In tellus integer feugiat scelerisque";

//append title and text to element ID blogText
var textContainer = document.createElement('div'); //Id not ID! Punctuation matters
textContainer.className = "grid-item-4";
textContainer.appendChild(title);
textContainer.appendChild(text);

//create image elemment
var image = document.createElement('img');
image.src = 'images/blog-1.jpg';

//append image to element class grid-item-4 (image container)
var imageContainer = document.createElement('div');
imageContainer.className = "grid-item-3";
imageContainer.appendChild(image);

//append image and text into 2x1 grid blogContainer
//var container = document.createElement('div');
var container = document.createElement('div');
container.className ="grid-container";
container.appendChild(imageContainer);
container.appendChild(textContainer);

//insert into document body
var test = document.getElementById('blogContainer');
document.body.insertBefore(container, test);

/*
title.textContent = 'Traveling with your dog';
title.style.fontFamily = "Times New Roman";
title.style.color = "rgb(0, 51, 102)";
title.style.fontWeight = "bold";
title.style.fontSize = '1.5rem';
title.style.margin = '0rem 0rem';

text.style.fontFamily = "Times New Roman";
text.style.fontSize = '1rem';

textContainer.style.gridArea = '1/3/1/4';


var clone = container.cloneNode(true);
document.body.appendChild(clone);

//create blog title with attributes
var title = document.createElement('h2');
title.textContent = 'header';

//create text
var text = document.createElement('p');
text.textContent = 'xxxxxx';

//append title and text to element ID blogText
var textContainer = document.createElement('div'); //Id not ID! Punctuation matters
textContainer.className = "grid-item-4";
textContainer.appendChild(title);
textContainer.appendChild(text);

//create image elemment
var image = document.createElement('img');
image.src = 'images/blog-1.jpg';

//append image to element class grid-item-4 (image container)
var imageContainer = document.createElement('div');
imageContainer.className = "grid-item-3";
imageContainer.appendChild(image);

//append image and text into 2x1 grid blogContainer
//var container = document.createElement('div');
var container = document.createElement('div');
container.className ="grid-container";
container.appendChild(imageContainer);
container.appendChild(textContainer);

//insert into document body
var test = document.getElementById('blogContainer');
document.body.insertBefore(container, test);

*******
//create blog title with attributes
var title = document.createElement('h2');
title.textContent = 'Traveling with your dog';

//create text
var text = document.createElement('p');
text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere morbi leo urna molestie. Fusce id velit ut tortor pretium viverra suspendisse potenti. Suscipit tellus mauris a diam maecenas. Odio tempor orci dapibus ultrices in. Tellus pellentesque eu tincidunt tortor. Turpis cursus in hac habitasse platea. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. In tellus integer feugiat scelerisque";

//append title and text to element ID blogText
var textContainer = document.createElement('div'); //Id not ID! Punctuation matters
textContainer.className = "grid-item-4";
textContainer.appendChild(title);
textContainer.appendChild(text);

//create image elemment
var image = document.createElement('img');
image.src = 'images/blog-1.jpg';

//append image to element class grid-item-4 (image container)
var imageContainer = document.createElement('div');
imageContainer.className = "grid-item-3";
imageContainer.appendChild(image);

//append image and text into 2x1 grid blogContainer
//var container = document.createElement('div');
var container = document.createElement('div');
container.className ="grid-container";
container.appendChild(imageContainer);
container.appendChild(textContainer);

//insert into document body
var test = document.getElementById('blogContainer');
document.body.insertBefore(container, test);


*/
