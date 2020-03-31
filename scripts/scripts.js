function dogInfo(dogBio) {
  alert(dogBio);
}

let total = 0;

function myFee(fee) {
  total += fee;
  alert(total);
}

//Lesson 08 assignment

const containerOne = document.getElementById('travel');
const blog1 = document.createElement('p');
blog1.textContent = 'Fat boi doge wow such tempt lotsa pats fat boi he made many woofs, yapper length boy borkf floofs. Fluffer lotsa pats the neighborhood pupper ur givin me a spook, bork much ruin diet. Puggo very hand that feed shibe corgo fluffer, long woofer noodle horse, smol borking doggo with a long snoot for pats such treat. You are doin me a concern ur givin me a spook waggy wags noodle horse sub woofer, shoober clouds you are doing me the shock. Shooberino ur givin me a spook vvv you are doing me the shock boof many pats wrinkler maximum borkdrive, you are doing me a frighten long doggo I am bekom fat blep pupperino shibe. Porgo adorable doggo borkf tungg, doing me a frighten. Smol thicc pupperino clouds long bois fluffer tungg, the neighborhood pupper ruff blop snoot length boy vvv, doggo doge boofers smol borking doggo with a long snoot for pats sub woofer. Mlem blep heckin good boys and girls smol maximum borkdrive, heckin good boys and girls you are doing me the shock adorable doggo. you are doin me a concern long water shoob. Very good spot fluffer long doggo, vvv.';
containerOne.appendChild(blog1);

const title = document.createElement('h2');
title.classList.add('blog-header');

title.textContent = 'Traveling With Your Dog';
containerOne.insertBefore(title, blog1);

const blog2 = {
  name: 'How To Walk Multiple Dogs',
  text: 'Fat boi doge wow such tempt lotsa pats fat boi he made many woofs, yapper length boy borkf floofs. Fluffer lotsa pats the neighborhood pupper ur givin me a spook, bork much ruin diet. Puggo very hand that feed shibe corgo fluffer, long woofer noodle horse, smol borking doggo with a long snoot for pats such treat. You are doin me a concern ur givin me a spook waggy wags noodle horse sub woofer, shoober clouds you are doing me the shock. Shooberino ur givin me a spook vvv you are doing me the shock boof many pats wrinkler maximum borkdrive, you are doing me a frighten long doggo I am bekom fat blep pupperino shibe. Porgo adorable doggo borkf tungg, doing me a frighten. Smol thicc pupperino clouds long bois fluffer tungg, the neighborhood pupper ruff blop snoot length boy vvv, doggo doge boofers smol borking doggo with a long snoot for pats sub woofer. Mlem blep heckin good boys and girls smol maximum borkdrive, heckin good boys and girls you are doing me the shock adorable doggo. you are doin me a concern long water shoob. Very good spot fluffer long doggo, vvv.',
};
blog2.text;

// document.getElementById('walk');
// const containerTwo = document.createElement(blog2);

//Teach Your Dog to Fetch!

//leverage this to generate multiple blog posts
// const blog = document.createElement('?');
// const fields = ['blog1', 'blog2', 'blog3'];
// for (let i = 0; i < fields.length; i += 1) *{
// const label = document.createElement('label');
// label.textContent = fields[i];
// label.setAttribute('for', fields[i]);
// const input = document.createElement('input');
// input.setAttribute('id', fields[i]);
// form.appendChild(label);
// form.appendChild(input);
// }
