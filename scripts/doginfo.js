function dogInfo(name,breed,fee){
  let clicked_dog = "This dog is named" + " " + name + "." + " " + name + " is a " + breed + "." + " " + name + " costs " + fee + ".";
  alert(clicked_dog);
}

var total_items = []; //this must be placed outside of function in order to have variables logged into the array, as inside the function, the array will constantly reset//
function dogAdopt(cost){
  total_items.push(cost);
  var total = 0;
  for(let i = 0; i < total_items.length; i++){
    total += Number(total_items[i]);
  }
  var total_alert = 'Your total cost of adoption is ' + '$' + total + '.';
  alert(total_alert);
}

//blog page//
const images = [
  {
    src: 'images/blog-1.jpg',
    alt: 'Human sitting with dog on ledge of mountain'
  },
  {
    src: 'images/blog-2.jpg',
    alt: 'Multiple dogs sitting in a park on leashes'
  },
  {
    src: 'images/blog-3.jpg',
    alt: 'Human asking dog to sit and dog sitting at sunset'
  }
];

const blogtexts = [
  {
    h3: 'Traveling With Your Dog',
    p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br/><br/>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    h3: 'How To Walk Multiple Dogs',
    p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br/><br/>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    h3: 'Teach Your Dog To Fetch!',
    p: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. <br/><br/>Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  }
]

const img_container = document.getElementsByClassName('blog-img');

for (let i = 0; i < img_container.length; i += 1){
  const img_container_item = img_container[i];
  const images_item = images[i];

  const image = document.createElement('IMG');
  image.src = images_item.src;
  image.alt = images_item.alt;
  img_container_item.appendChild(image);
}

const blogtext_container = document.getElementsByClassName('blog-textbox');

for (let i = 0; i < blogtext_container.length; i += 1){
  const blogtext_container_item = blogtext_container[i];
  const blogtexts_item = blogtexts[i];

  const header3 = document.createElement('h3');
  header3.innerHTML = blogtexts_item.h3;
  const paragraph = document.createElement('p');
  paragraph.innerHTML = blogtexts_item.p;
  paragraph.setAttribute('class', 'blog-text');

  blogtext_container_item.appendChild(header3);
  blogtext_container_item.appendChild(paragraph);
}
