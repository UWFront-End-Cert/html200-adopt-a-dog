//TEST: Get h2 and turn it red
//let h2 = document.getElementsByTagName("H2") [1];
//let att = document.createAttribute("class");
//att.value = "democlass";
//h2.setAttributeNode(att);

//BLOG
document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementByClassName("main-blog-title");
  document.body.insertBefore(newDiv, currentDiv);
}
