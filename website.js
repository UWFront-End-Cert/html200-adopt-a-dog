// function alert('Murphy, Labrador, $100 adoption fees') {
//
//   let input = prompt('Dog Info');
//   let result = "Murphy, Labrador, $100 adoption fees";
//
//   result = console.log('Murphy, Labrador, $100 adoption fees');
// }

//function numberAdder(firstNumber) {
//  let input = prompt('Enter a number');
//  let numberToAdd = input;
//  let result = 0;

//  result = numberToAdd * Number(input);

//  alert(result);
//}

// const blog = {
//   title: 'Traveling With Your Dog',
// }
//
// const div = document.createElement('div')
// document.body.appendChild(div)
// const h2 = document.createElement('h2')
// h2.innerHTML = blog.title
// div.appendChild(h2)
//
//

//   var text.appendChild(myImg);
// const blogPosts = ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."];

// let text = "";
//
// var i = 0;
// for(i=0;i < blogPosts.length; i++) {
//   text += "<p>"+ blogPosts[i] + "</p>";
// }


// <img src="images/blog-1.jpg" class="pic-blog-1" width="300" height="280" alt="Man sitting with a dog; A picture from the back">
// <p class="traveling1"> Traveling With Your Dog</p>
//
// <p class="text-blog1">Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.</p>
// <p class="text-blog2">Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.</p>
//


// document.getElementById("content").innerHTML = text;



// i need
// const blogImages = ["./images/blog-1.jpg", "./images/blog-2.jpg", "./images/blog-3.jpg"];
// const blogTitles = ["Traveling With Your Dog", "How To Walk Multiple Dogs", "Teach Your Dog To Fetch!"];
// const blogPosts = ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.", "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."];
//
// var i = 0;
//
// function makeBlogPosts(imagePath, blogPosts, headline) {
//
//   var myContent = document.getElementById("content");
//
//   var myImg = document.createElement('img');
//   myImg.src = imagePath;
//   myImg.classList = "pic-blog-1";
//   myImg.width = "300";
//   myImg.height = "280";
//   myContent.appendChild(myImg);
//
//   var mySub = document.createElement('p');
//   mySub.innerHTML = headline;
//   mySub.classList = "traveling1";
//   myContent.appendChild(mySub);
//
//   var j = 0;
//
//   for (j = 0; j < blogPosts.length; j++) {
//     var myPara = document.createElement('p');
//     myPara.innerHTML = blogPosts[j];
//     myPara.classList = "text-blog1";
//     myContent.appendChild(myPara);
//   }
// }
//
//   for (i = 0; i < blogTitles.length; i++) {
//     // alert(i);
//     makeBlogPosts(blogImages[i], blogPosts, blogTitles[i]);
//
//   }
// end of what i need

const blogImages = ["./images/blog-1.jpg", "./images/blog-2.jpg", "./images/blog-3.jpg"];
const blogTitles = ["Traveling With Your Dog", "How To Walk Multiple Dogs", "Teach Your Dog To Fetch!"];
const blogPosts = ["Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat."];
const blogPosts2 =["Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."];
var i = 0;

function makeBlogPosts(imagePath, blogPosts, headline) {

  var myContent = document.getElementById("content");

  var myImg = document.createElement('img');
  myImg.src = imagePath;
  myImg.classList = "pic-blog-1";
  myImg.width = "300";
  myImg.height = "280";
  myContent.appendChild(myImg);

  var mySub = document.createElement('p');
  mySub.innerHTML = headline;
  mySub.classList = "traveling1";
  myContent.appendChild(mySub);

  var j = 0;

  for (j = 0; j < blogPosts.length; j++) {
    var myPara = document.createElement('p');
    myPara.innerHTML = blogPosts[j];
    myPara.classList = "text-blog1";
    myContent.appendChild(myPara);
  }

  var k = 0;

  for (k = 0; k < blogPosts.length; k++) {
  var myPara2 = document.createElement('p');
  myPara2.innerHTML = blogPosts2[k];
  myPara2.classList = "text-blog2";
  myContent.appendChild(myPara2);
  }
}

  for (i = 0; i < blogTitles.length; i++) {
    // alert(i);
    makeBlogPosts(blogImages[i], blogPosts, blogTitles[i]);

  }






  // var postsDiv = document.getElementById("posts");
  //
  // var posts = [
  //   {
  //   "name": "Traveling With Your Dog",
  //   "content": {
  //         postFirstParagraph: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
  //         postSecondParagraph: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  //   }
  //   },
  // {
  //
  //   "name": "How To Walk Multiple Dogs",
  //  "content": {
  //         postFirstParagraph: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
  //         postSecondParagraph: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  //   }
  //   },
  // {
  //   "name": "Teach Your Dog To Fetch",
  //   "content":
  //   {
  //         postFirstParagraph: "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
  //         postSecondParagraph: "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.",
  //   }
  //   },
  // ];
  //
  //
  // posts.forEach(function(post) {
  //   var postDiv = document.createElement("div");
  //   var postNameDiv = document.createElement("div");
  //   var postContentDiv = document.createElement("div");
  //   var postFirstParagraph = document.createElement("p");
  //   var postSecondParagraph = document.createElement("p");
  //
  //   document.getElementById("posts") {
  //
  //   // const postFirstParagraphText = document.createTextNode("posts.content.postFirstParagraph");
  //   // const postSecondParagraphText = document.createTextNode("posts.content.postSecondParagraph");
  //
  //   postFirstParagraph.appendChild(postFirstParagraphText);
  //   postSecondParagraph.appendChild(postSecondParagraphText);
  //
  //
  //   postNameDiv.innerHTML = post.name;
  //   postContentDiv.innerHTML = post.content;
  //
  //   postDiv.innerHTML = post;
  //
  //
  //   postDiv.appendChild(postNameDiv);
  //   postDiv.appendChild(postFirstParagraph);
  //   postDiv.appendChild(postSecondParagraph);
  //
  //
  //
  //  postsDiv.appendChild(postDiv);
  //
  // });



  //var postDiv = document.createElement("div");
  //postDiv.innerHTML = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.";
  //postDiv.innerHTML = "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.";

  //postsDiv.appendChild(postDiv);

  // const para = {
  //   paragraph: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.'
  // }
  //
  // const para2 = {
  //   paragraph2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  // }
  //
  //
  // const p = document.createElement('p')
  // p.innerHTML = para.paragraph
  // div.appendChild(p)
  //
  // const p2 = document.createElement('p')
  // p2.innerHTML = para2.paragraph2
  // div.appendChild(p2)
