//blog post
document.getElementById('blogsection').addEventListener = "load", addBlogs();

function addBlogs() {
  console.log('starting function');
  let fields = [
    {
      blogImageSrc: './images/blog-1.jpg',
      blogImageAlt: 'Picture one',
      blogHeader: 'Traveling With Your Dog',
      blogBody: 'Quo magnatem iuntum quid. Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. <br>Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    },
    {
      blogImageSrc: './images/blog-2.jpg',
      blogImageAlt: 'Picture two',
      blogHeader: 'Traveling With Your Dog2',
      blogBody: 'Yes duciendisite quo magnatem iuntum quid. Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    },
    {
      blogImageSrc: './images/blog-3.jpg',
      blogImageAlt: 'Picture three',
      blogHeader: 'Traveling With Your Dog3',
      blogBody: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    }
  ];
  for (let i = 0; i < fields.length; i++) {
    const blogSection = document.getElementById('blogsection');

    const article = document.createElement('article');
    article.setAttribute('class', 'blog row');
    let articleID = "blog" + (i+1);
    article.setAttribute('id', articleID);

    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'col col-md-4 col-sm-12 blog-photo');

    const image = document.createElement('img');
    image.setAttribute('src', fields[i].blogImageSrc);
    image.setAttribute('alt', fields[i].blogImageAlt);


    blogSection.appendChild(article);
    article.appendChild(imageDiv);
    imageDiv.appendChild(image);

    const blogDiv = document.createElement('div');
    blogDiv.setAttribute('class', 'col col-md-8 col-sm-12');

    const blogHeaderfield = document.createElement('h2');
    blogHeaderfield.textContent = fields[i].blogHeader;

    const blogBodyfield = document.createElement('p');
    blogBodyfield.innerHTML = fields[i].blogBody;

    article.appendChild(blogDiv);
    blogDiv.appendChild(blogHeaderfield);
    blogDiv.appendChild(blogBodyfield);

  }
}

//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
document.getElementById('submitForm').addEventListener = "submit", formAlert();

function formAlert(){
  event.preventDefault();//prevent it from refreshing page
  console.log("running alert function");
  //alert ("Thank you. The form information has been received.");
}




//create click handlers that alerts the dogs information when clickin on the dog's photo"
function dogInfo(dogName, breed, fees){
  alert(`To adopt ${dogName}, the ${breed}, it will cost ${fees}.`);
}

//create clickhandlers on each dog's button that will add to the total
let cartTotal = 0; //declare total outside of function so it can be added to each time the function is run

function totalCost(fee){
  cartTotal = cartTotal + fee;
  alert (`Your Total Adoption Cost is ${cartTotal}`);
}
