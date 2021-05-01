let adoptionFee = 123.45;
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
