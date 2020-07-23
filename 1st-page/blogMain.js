var x = document.createElement("HEADER");
x.setAttribute("id", "myHeader");
document.body.appendChild(x);

var y = document.createElement("H1");
var t = document.createTextNode("Adoptadog Blog");
y.appendChild(t);

document.getElementById("myHeader").appendChild(y);
x.style.color = "#003366";


var pic1 = document.createElement("IMG");
pic1.setAttribute("src", "blog-1.jpg");
pic1.setAttribute("width", "304");
pic1.setAttribute("height", "228");
pic1.setAttribute("alt", "Girl with dog looking at the grand canyon");
document.body.appendChild(pic1);

var z = document.createElement("H2");
var w = document.createTextNode("Traveling with your dog");
    z.appendChild(w);
    document.getElementById("myHeader").appendChild(z);

var para = document.createElement("p");
para.setAttribute("id", "1stPara");
var node = document.createTextNode("Paragraph.");
para.appendChild(node);
document.body.appendChild(para);
document.getElementById("1stPara");
//para.style.cssFloat = "right";


var pic2 = document.createElement("IMG");
pic2.setAttribute("src", "blog-2.jpg");
pic2.setAttribute("width", "304");
pic2.setAttribute("height", "228");
pic2.setAttribute("alt", "Walking many dogs at once");
document.body.appendChild(pic2);

var para2 = document.createElement("p");
var node2 = document.createTextNode("Paragraph.");
para2.appendChild(node2);
document.body.appendChild(para2);

var pic3 = document.createElement("IMG");
pic3.setAttribute("src", "blog-3.jpg");
pic3.setAttribute("width", "304");
pic3.setAttribute("height", "228");
pic3.setAttribute("alt", "Playing fetch with the dog");
document.body.appendChild(pic3);

var para3 = document.createElement("p");
var node3 = document.createTextNode("Paragraph.");
para3.appendChild(node3);
document.body.appendChild(para3);