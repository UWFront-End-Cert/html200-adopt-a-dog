/*h2 headline*/
const blurb = document.createElement("h2");
blurb.style.marginLeft = "15%";
blurb.style.marginTop = "2%";
blurb.textContent = "Adoptadog blog";
document.body.appendChild(blurb);
const footer = document.getElementById("blog-footer");
document.body.insertBefore(blurb, footer);

/*container
const container = document.createElement("div");
document.body.appendChild(container);
document.body.insertBefore(container, footer);

*article*
const article = document.createElement("article");
document.body.appendChild(article);
document.body.insertBefore(article, footer);*/

/*first blog image*/
const image = document.createElement("IMG");
image.style.width = "20%";
image.style.marginLeft = "15%";
image.style.marginTop = "1%";
image.style.marginBottom = "5%";
image.setAttribute("src", "images/blog-1.jpg");
image.setAttribute("width", "15%");
image.setAttribute("style.cssFloat", "left");
image.setAttribute("alt", "Girl hugging her dog as they sit on a cliff overlooking the Grand Canyon.")
document.body.appendChild(image);
document.body.insertBefore(image, footer);

/*h3 subhead*/
const header = document.createElement("h3");
header.style.width = "20%";
header.textContent = "Traveling With Your Dog";
document.body.appendChild(header);
document.body.insertBefore(header, footer);

/*paragraph text*/
const para = document.createElement("p");
para.textContent = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.";
document.body.appendChild(para);
document.body.insertBefore(para, footer);
