//TEST: Create header and insert to h2//

let h2 = document.getElementsByTagName("H2") [1];
let att = document.createAttribute("class");
att.value = "democlass";
h2.setAttributeNode(att);

//Set blog values//
