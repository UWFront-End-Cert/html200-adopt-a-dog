var arr = new Array();
function myFunction(name,breed,fee){
  alert("Name:"+name+"\nBreed:"+breed+"\nAdoption Fee:"+fee);
}
function getSum(total,num) {
  return total + Math.round(num);
}
function adoptFunction(item){
  var x = document.getElementById("price").childNodes[0].nodeValue;
  arr.push(x);

  for (var i = 0; i <= arr.length; i++) {
    total = +arr[i];
  }
  document.getElementById('demo').innerHTML = arr.reduce(getSum,0);
}

const container = document.getElementById('container');
const heading = document.createElement('h1');
heading.textContent = 'Adoptadog Blog!';
container.appendChild(heading);
var images = ['blog-1.jpg','blog-2.jpg','blog-3.jpg'];
var titles = ['Travelling With Your Dog','How To Walk Multiple Dogs','Teach Your Dog To Fetch!'];
for(let i=0;i<images.length;i++){
  const subContainer = document.getElementById('subContainer'+(i+1));
  console.log('subContainer:'+subContainer);
  const image = document.createElement('img');
  image.src = 'images/'+images[i];
  console.log('images/'+images[i]);
  subContainer.appendChild(image);
  const content = document.getElementById('content'+(i+1));
  const title = document.createElement('h3');
  const para = document.createElement('p');
  title.textContent = titles[i];
  para.textContent = 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.';
  content.appendChild(title);
  content.appendChild(para);
  content.insertBefore(title,para);
  subContainer.appendChild(content);
  subContainer.insertBefore(image,content);
  }
