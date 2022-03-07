
const blogImages = ["./images/blog-1.jpg", "./images/blog-2.jpg", "./images/blog-3.jpg"];
const blogTitles = ["Traveling With Your Dog", "How To Walk Multiple Dogs", "Teach Your Dog To Fetch!"];
const blogPosts = ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."];
const blogPosts2 =["Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."];
var i = 0;

function makeBlogPosts(imagePath, blogPosts, headline) {

  var myContent = document.getElementById("content");

  var myFlex = document.createElement('div');
  myFlex.classList = "flex-box-blog";
  myContent.appendChild(myFlex);

  var myImg = document.createElement('img');
  myImg.src = imagePath;
  myImg.classList = "pic-blog-1";
  myImg.width = "300";
  myImg.height = "280";
  myFlex.appendChild(myImg);

  var mySub = document.createElement('p');
  mySub.innerHTML = headline;
  mySub.classList = "traveling1";
  myFlex.appendChild(mySub);

  var j = 0;

  for (j = 0; j < blogPosts.length; j++) {
    var myPara = document.createElement('p');
    myPara.innerHTML = blogPosts[j];
    myPara.classList = "text-blog1";
    myFlex.appendChild(myPara);
  }

  var k = 0;

  for (k = 0; k < blogPosts.length; k++) {
  var myPara2 = document.createElement('p');
  myPara2.innerHTML = blogPosts2[k];
  myPara2.classList = "text-blog2";
  myFlex.appendChild(myPara2);
  }
}

  for (i = 0; i < blogTitles.length; i++) {
    makeBlogPosts(blogImages[i], blogPosts, blogTitles[i]);

  }
