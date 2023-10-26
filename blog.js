function myFunction() {

// Create a h1 element
const title = document.createElement('h1');
title.textContent = 'My Image';
document.getElementById('myDIV').appendChild(title);

// Create an image element
const container = document.getElementById('myDIV');
const image = document.createElement('img');
image.src = 'images/blog-3.jpg';
container.appendChild(image);


// Create a p element:
const para = document.createElement('p');
const node = document.createTextNode("Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.");
// Append text node to the p element:
para.appendChild(node);
// Append the p element to the body:
document.getElementById('myDIV').appendChild(para);
}
