const adoptionFee = 123.45;
let murphyClick = 0;
let poppyClick = 0;
let jackClick = 0;
let duffyClick = 0;
let lucasClick = 0;
let jakeClick = 0;
let angusClick = 0;
let violetClick = 0;
let piperClick = 0;
let maximusClick = 0;
let lunaClick = 0;
let stellaClick = 0;

function murphy() {
  alert("Name: Murphy, Breed: Alien, Adoption:$123.45");
}
function poppy() {
  alert("Name: Poppy, Breed: Alien, Adoption:$123.45");
}
function jack() {
  alert("Name: Jack, Breed: Alien, Adoption:$123.45");
}
function duffy() {
  alert("Name: Duffy, Breed: Alien, Adoption:$123.45");
}
function lucas() {
  alert("Name: Lucas, Breed: Alien, Adoption:$123.45");
}
function jake() {
  alert("Name: Jake, Breed: Alien, Adoption:$123.45");
}
function angus() {
  alert("Name: Angus, Breed: Alien, Adoption:$123.45");
}
function violet() {
  alert("Name: Violet, Breed: Alien, Adoption:$123.45");
}
function piper() {
  alert("Name: Piper, Breed: Alien, Adoption:$123.45");
}
function maximus() {
  alert("Name: Maximus, Breed: Alien, Adoption:$123.45");
}
function luna() {
  alert("Name: Luna, Breed: Alien, Adoption:$123.45");
}
function stella() {
  alert("Name: Stella, Breed: Alien, Adoption:$123.45");
}

let total = 0;

function murphyAdd() {
  murphyClick = 1;
  totalAll();
}
function poppyAdd() {
  poppyClick = 1;
  totalAll();
}
function jackAdd() {
  jackClick = 1;
  totalAll();
}
function duffyAdd() {
  duffyClick = 1;
  totalAll();
}
function lucasAdd() {
  lucasClick = 1;
  totalAll();
}
function jakeAdd() {
  jakeClick = 1;
  totalAll();
}
function angusAdd() {
  angusClick = 1;
  totalAll();
}
function violetAdd() {
  violetClick = 1;
  totalAll();
}
function piperAdd() {
  piperClick = 1;
  totalAll();
}
function maximusAdd() {
  maximusClick = 1;
  totalAll();
}
function lunaAdd() {
  lunaClick = 1;
  totalAll();
}
function stellaAdd() {
  stellaClick = 1;
  totalAll();
}

function totalAll() {
  total =
    adoptionFee *
    (murphyClick +
      poppyClick +
      jackClick +
      duffyClick +
      lucasClick +
      jakeClick +
      angusClick +
      violetClick +
      piperClick +
      maximusClick +
      lunaClick +
      stellaClick);
  alert("Total: $" + total.toFixed(2));
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
}
if (document.getElementById("submit") != null) {
  document.getElementById("submit").addEventListener("click", function (event) {
    alert("Thank you. The form information has been received.");
    console.log(document.querySelector('input[name="applicantName"]').value);
    console.log(document.querySelector('input[name="applicantEmail"]').value);
    console.log(
      document.querySelector('input[name="applicantStreetAdd"]').value
    );
    console.log(document.querySelector('input[name="applicantCity"]').value);
    console.log(document.querySelector('select[name="applicantState"]').value);
    console.log(document.querySelector('input[name="applicantZipCode"]').value);
    console.log(document.querySelector('input[name="special"]:checked').value);
    console.log(document.querySelector('select[name="location"]').value);
  });
}
function runRefactor() {
  let image = document.querySelectorAll("img")[2];
  image.class = "blog-page-image";
  image.src = "../images/blog-1.jpg";
  image.alt = "A man enjoying the canyan scenery with his dog";
  image.srcset =
    "../images/blog-1-square-400.jpg 400w,../images/blog-1-square-600.jpg 600w,../images/blog-1-square-800.jpg 800w";
  image.sizes =
    "(max-width: 500px) 400px, (min-width: 501px) and (max-width: 759px) 600px, (min-width: 760px) 800px, 100vw";
  let titleText = document.querySelectorAll("h2")[0];
  titleText.textContent = "Traveling With Your Dog";
  let descriptionText = document.querySelectorAll("p")[2];
  descriptionText.textContent =
    "\nIduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis\ndolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum\nvolore, undipsa doloreium hillupta aut es ut alitatuscit ommossum\nharitatur arum qui officae videbiti corporeium faccull oribus es\nquidignis ipietus explam sus am aut amet ant fugiatum, utem non\nreptat.\n";
  descriptionText = document.querySelectorAll("p")[3];
  descriptionText.textContent =
    "\nUptiusd andesci qui nem aut vendion ectur? Debis que explaut\nlaborenia que doluptur, con et labor abor sant poreperum dio quat\nque doluptatur aut voluptassim quisciatquam ea ad qui con nes cus\nesere dolut hicto teni solutenis alit ulparume nonseca estorer\nspernam voluptassim quisciatquam ea ad qui con nes cus esere dolut\nhicto teni solutenis alit ulparume nonseca estorer spernam.\n";

  image = document.querySelectorAll("img")[3];
  image.class = "blog-page-image";
  image.src = "../images/blog-2.jpg";
  image.alt = "Four dogs looking at their dog walkers";
  image.srcset =
    "../images/blog-2-square-400.jpg 400w,../images/blog-2-square-600.jpg 600w,../images/blog-2-square-800.jpg 800w";
  image.sizes =
    "(max-width: 500px) 400px, (min-width: 501px) and (max-width: 759px) 600px, (min-width: 760px) 800px, 100vw";
  titleText = document.querySelectorAll("h2")[1];
  titleText.textContent = "How To Walk Multiple Dogs";
  descriptionText = document.querySelectorAll("p")[4];
  descriptionText.textContent =
    "\nIduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis\ndolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum\nvolore, undipsa doloreium hillupta aut es ut alitatuscit ommossum\nharitatur arum qui officae videbiti corporeium faccull oribus es\nquidignis ipietus explam sus am aut amet ant fugiatum, utem non\nreptat.\n";
  descriptionText = document.querySelectorAll("p")[5];
  descriptionText.textContent =
    "\nUptiusd andesci qui nem aut vendion ectur? Debis que explaut\nlaborenia que doluptur, con et labor abor sant poreperum dio quat\nque doluptatur aut voluptassim quisciatquam ea ad qui con nes cus\nesere dolut hicto teni solutenis alit ulparume nonseca estorer\nspernam voluptassim quisciatquam ea ad qui con nes cus esere dolut\nhicto teni solutenis alit ulparume nonseca estorer spernam.\n";

  image = document.querySelectorAll("img")[4];
  image.class = "blog-page-image";
  image.src = "../images/blog-3.jpg";
  image.alt = "A girl holding up a ball in front of a dog";
  image.srcset =
    "../images/blog-3-square-400.jpg 400w,../images/blog-3-square-600.jpg 600w,../images/blog-3-square-800.jpg 800w";
  image.sizes =
    "(max-width: 500px) 400px, (min-width: 501px) and (max-width: 759px) 600px, (min-width: 760px) 800px, 100vw";
  titleText = document.querySelectorAll("h2")[2];
  titleText.textContent = "Teach Your Dog To Fetch!";
  descriptionText = document.querySelectorAll("p")[6];
  descriptionText.textContent =
    "\nIduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis\ndolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum\nvolore, undipsa doloreium hillupta aut es ut alitatuscit ommossum\nharitatur arum qui officae videbiti corporeium faccull oribus es\nquidignis ipietus explam sus am aut amet ant fugiatum, utem non\nreptat.\n";
  descriptionText = document.querySelectorAll("p")[7];
  descriptionText.textContent =
    "\nUptiusd andesci qui nem aut vendion ectur? Debis que explaut\nlaborenia que doluptur, con et labor abor sant poreperum dio quat\nque doluptatur aut voluptassim quisciatquam ea ad qui con nes cus\nesere dolut hicto teni solutenis alit ulparume nonseca estorer\nspernam voluptassim quisciatquam ea ad qui con nes cus esere dolut\nhicto teni solutenis alit ulparume nonseca estorer spernam.\n";
}

$(function () {
  "use strict";
  console.log("DOM is ready, javascript loading!");
  $(".dog-pic")
    .mouseenter(function () {
      console.log("mouse has entered");
      $(this).fadeTo("slow", 0.6);
    })
    .mouseleave(function () {
      console.log("mouse has left");
      $(this).fadeTo("fast", 1);
    });

  $("form").on("submit", function (event) {
    event.preventDefault();
    console.log($(this).serialize());
    console.log($("[name=applicantName]").val());
    console.log($("[name=applicantEmail]").val());
    console.log($("[name=applicantStreetAdd]").val());
    console.log($("[name=applicantCity]").val());
    console.log($("[name=applicantState]").val());
    console.log($("[name=applicantZipCode]").val());
    console.log($("[name=special]:checked").val());
    console.log($("[name=location]").val());
  });

  //let adoptionFee = 123.45;
  let total = 0;
  $("button").click(function () {
    total =
      adoptionFee *
      (murphyClick +
        poppyClick +
        jackClick +
        duffyClick +
        lucasClick +
        jakeClick);
    $("#total").html("$" + total.toFixed(2));
    console.log(total);
  });
});
