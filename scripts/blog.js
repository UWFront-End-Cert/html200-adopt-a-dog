/*const foot = document.getElementById("foot");

// Creates title of blog page
const title = document.createElement('h2');
title.textContent = "Adoptadog Blog";
title.className = "blog-title";
document.body.insertBefore(title, foot);

// Blogs container
const blogs = document.createElement("section");
blogs.setAttribute("class", "blogs");
blogs.setAttribute("id", "maincontent");

// Blog1 container
const blog = document.createElement("article");
blog.setAttribute("class", "blog");

// Blog 1 - P1
const blog1Image = document.createElement("div");
blog1Image.setAttribute("class", "c1");

const image1 = document.createElement("img");
image1.setAttribute("src", "./images/blog-1.jpg");
image1.setAttribute("alt", "Girl sitting with arm around dog in the canyons");

blog1Image.appendChild(image1);

// Blog 1 - P2
const blog1Content = document.createElement("div");
blog1Content.setAttribute("class", "c2");

const blog1Title = document.createElement("h3");
blog1Title.textContent = "Traveling With Your Dog";

const blog1Paragraph = document.createElement("p");
blog1Paragraph.textContent = "duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";

blog1Content.appendChild(blog1Title);
blog1Content.appendChild(blog1Paragraph);

// Blog 1 container append
blog.appendChild(blog1Image)
blog.appendChild(blog1Content);

//NOW REPEAT FOR BLOG 2

// Blog 2 - P1
const blog2Image = document.createElement("div");
blog2Image.setAttribute("class", "c1");

const image2 = document.createElement("img");
image2.setAttribute("src", "./images/blog-2.jpg");
image2.setAttribute("alt", "Multiple Dogs on a leash going for a walk");

blog2Image.appendChild(image2);

// Blog 2 - P2
const blog2Content = document.createElement("div");
blog2Content.setAttribute("class", "c2");

const blog2Title = document.createElement("h3");
blog2Title.textContent = "How To Walk Multiple Dogs";

const blog2Paragraph = document.createElement("p");
blog2Paragraph.textContent = "duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";

blog2Content.appendChild(blog2Title);
blog2Content.appendChild(blog2Paragraph);

// Blog 2 container append
blog.appendChild(blog2Image)
blog.appendChild(blog2Content);

//NOW REPEAT FOR BLOG 3

// Blog 3 - P1
const blog3Image = document.createElement("div");
blog3Image.setAttribute("class", "c1");

const image3 = document.createElement("img");
image3.setAttribute("src", "./images/blog-3.jpg");
image3.setAttribute("alt", "Girl holding ball during sunset while dog patiently waits for her to throw it");

blog3Image.appendChild(image3);

// Blog 3 - P2
const blog3Content = document.createElement("div");
blog3Content.setAttribute("class", "c2");

const blog3Title = document.createElement("h3");
blog3Title.textContent = "Teach Your Dog To Fetch!";

const blog3Paragraph = document.createElement("p");
blog3Paragraph.textContent = "duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";

blog3Content.appendChild(blog3Title);
blog3Content.appendChild(blog3Paragraph);

// Blog 3 container append
blog.appendChild(blog3Image)
blog.appendChild(blog3Content);

// END
blogs.appendChild(blog);
document.body.insertBefore(blogs, foot);
 */

const foot = document.getElementById("foot");
const title = document.createElement('h2');
title.textContent = "Adoptadog Blog";
title.className = "blog-title";
document.body.insertBefore(title, foot);
const blogs = document.createElement("section");
blogs.setAttribute("class", "blogs");
blogs.setAttribute("id", "maincontent");
const blog = document.createElement("article");
blog.setAttribute("class", "blog");

const allparagraphs = "duciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";
const blog_one = ["./images/blog-1.jpg", "Girl sitting with arm around dog in the canyons", "Traveling With Your Dog", "travel"];
const blog_two = ["./images/blog-2.jpg", "Multiple Dogs on a leash going for a walk", "How To Walk Multiple Dogs", "walk"];
const blog_three = ["./images/blog-3.jpg", "Girl holding ball during sunset while dog patiently waits for her to throw it", "Teach Your Dog To Fetch!", "fetch"];

const all = [blog_one, blog_two, blog_three];

for (let x = 0; x < all.length; x += 1) {
	const object = all[x];
	const blogImage = document.createElement("div");
	blogImage.setAttribute("class", "c1");
	blogImage.setAttribute("id", object[3]);
	const image = document.createElement("img");
	image.setAttribute("src", object[0]);
	image.setAttribute("alt", object[1]);
	blogImage.appendChild(image);
	const blogContent = document.createElement("div");
	blogContent.setAttribute("class", "c2");
	const blogTitle = document.createElement("h3");
	blogTitle.textContent = object[2];
	const blogParagraph = document.createElement("p");
	blogParagraph.textContent = allparagraphs;
	blogContent.appendChild(blogTitle);
	blogContent.appendChild(blogParagraph);
	blog.appendChild(blogImage);
	blog.appendChild(blogContent);
	blogs.appendChild(blog);
}

document.body.insertBefore(blogs, foot);
