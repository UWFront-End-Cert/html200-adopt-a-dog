//Lesson 05 assignment
function dogInfo(dogBio) {
  alert(dogBio);
}

let total = 0;

function myFee(fee) {
  total += fee;
  alert(total);
}

//Lesson 08 assignment

// const submitFinal = document.getElementById('button-final');
// const submitButton = document.createElement('button')
// submitButton.setAttribute('type', 'submit');
// submitButton.textContent = 'Submit';
// submitFinal.appendChild(submitButton);
//
// document.getElementById('button-final').addEventListener("click", function myAdoption() {
//   alert("Thank you. The form information has been received.");
// });
// let arr = [];
// let str = arr.join(' ');
//   console.log(str);

// const containerOne = document.getElementById('travel');
//
// const imageOne = document.createElement('img');
// imageOne.src = 'images/blog-1.jpg';
// imageOne.classList.add('image-responsive');
// imageOne.alt = "Woman sits on edge of canyon with her arm around a black dog"
// containerOne.appendChild(imageOne);
//
// const titleOne = document.createElement('h2');
// titleOne.classList.add('blog-header');
// titleOne.textContent = 'Traveling With Your Dog';
// containerOne.appendChild(titleOne);
//
// const blogOne = document.createElement('p');
// blogOne.textContent = 'Fat boi doge wow such tempt lotsa pats fat boi he made many woofs, yapper length boy borkf floofs. Fluffer lotsa pats the neighborhood pupper ur givin me a spook, bork much ruin diet. Puggo very hand that feed shibe corgo fluffer, long woofer noodle horse, smol borking doggo with a long snoot for pats such treat. You are doin me a concern ur givin me a spook waggy wags noodle horse sub woofer, shoober clouds you are doing me the shock. Shooberino ur givin me a spook vvv you are doing me the shock boof many pats wrinkler maximum borkdrive, you are doing me a frighten long doggo I am bekom fat blep pupperino shibe. Porgo adorable doggo borkf tungg, doing me a frighten. Smol thicc pupperino clouds long bois fluffer tungg, the neighborhood pupper ruff blop snoot length boy vvv, doggo doge boofers smol borking doggo with a long snoot for pats sub woofer. Mlem blep heckin good boys and girls smol maximum borkdrive, heckin good boys and girls you are doing me the shock adorable doggo. you are doin me a concern long water shoob. Very good spot fluffer long doggo, vvv.';
// blogOne.classList.add('blog-text');
// containerOne.appendChild(blogOne);


// // leverage this to generate multiple blog posts


    const blogs = [
      {
        img: 'images/blog-1.jpg',
        alt: 'Woman sits on edge of canyon with her arm around a black dog',
        h2: 'Traveling With Your Dog',
        p: 'Fat boi doge wow such tempt lotsa pats fat boi he made many woofs, yapper length boy borkf floofs. Fluffer lotsa pats the neighborhood pupper ur givin me a spook, bork much ruin diet. Puggo very hand that feed shibe corgo fluffer, long woofer noodle horse, smol borking doggo with a long snoot for pats such treat. You are doin me a concern ur givin me a spook waggy wags noodle horse sub woofer, shoober clouds you are doing me the shock. Shooberino ur givin me a spook vvv you are doing me the shock boof many pats wrinkler maximum borkdrive, you are doing me a frighten long doggo I am bekom fat blep pupperino shibe. Porgo adorable doggo borkf tungg, doing me a frighten. Smol thicc pupperino clouds long bois fluffer tungg, the neighborhood pupper ruff blop snoot length boy vvv, doggo doge boofers smol borking doggo with a long snoot for pats sub woofer. Mlem blep heckin good boys and girls smol maximum borkdrive, heckin good boys and girls you are doing me the shock adorable doggo. you are doin me a concern long water shoob. Very good spot fluffer long doggo, vvv.'
    },
      {
        img: 'images/blog-2.jpg',
        alt: 'Four leashed dogs in a park all look attentively at person who is walking them',
        h2: 'How To Walk Multiple Dogs',
        p: 'Fat boi doge wow such tempt lotsa pats fat boi he made many woofs, yapper length boy borkf floofs. Fluffer lotsa pats the neighborhood pupper ur givin me a spook, bork much ruin diet. Puggo very hand that feed shibe corgo fluffer, long woofer noodle horse, smol borking doggo with a long snoot for pats such treat. You are doin me a concern ur givin me a spook waggy wags noodle horse sub woofer, shoober clouds you are doing me the shock. Shooberino ur givin me a spook vvv you are doing me the shock boof many pats wrinkler maximum borkdrive, you are doing me a frighten long doggo I am bekom fat blep pupperino shibe. Porgo adorable doggo borkf tungg, doing me a frighten. Smol thicc pupperino clouds long bois fluffer tungg, the neighborhood pupper ruff blop snoot length boy vvv, doggo doge boofers smol borking doggo with a long snoot for pats sub woofer. Mlem blep heckin good boys and girls smol maximum borkdrive, heckin good boys and girls you are doing me the shock adorable doggo. you are doin me a concern long water shoob. Very good spot fluffer long doggo, vvv.'
    },
    {
        img: 'images/blog-3.jpg',
        alt: 'ilhouetted woman holds ball up for sitting dog during sunset',
        h2: 'Teach Your Dog to Fetch!',
        p: 'Fat boi doge wow such tempt lotsa pats fat boi he made many woofs, yapper length boy borkf floofs. Fluffer lotsa pats the neighborhood pupper ur givin me a spook, bork much ruin diet. Puggo very hand that feed shibe corgo fluffer, long woofer noodle horse, smol borking doggo with a long snoot for pats such treat. You are doin me a concern ur givin me a spook waggy wags noodle horse sub woofer, shoober clouds you are doing me the shock. Shooberino ur givin me a spook vvv you are doing me the shock boof many pats wrinkler maximum borkdrive, you are doing me a frighten long doggo I am bekom fat blep pupperino shibe. Porgo adorable doggo borkf tungg, doing me a frighten. Smol thicc pupperino clouds long bois fluffer tungg, the neighborhood pupper ruff blop snoot length boy vvv, doggo doge boofers smol borking doggo with a long snoot for pats sub woofer. Mlem blep heckin good boys and girls smol maximum borkdrive, heckin good boys and girls you are doing me the shock adorable doggo. you are doin me a concern long water shoob. Very good spot fluffer long doggo, vvv.'
    }
  ];


  for (let i = 0; i < blogs.length; i += 1) {
    const field = blogs[i];

    const containerOne = document.createElement('article');

    const img = document.createElement('img');
    img.src = 'images/blog-1.jpg';
    containerOne.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = field.h2;
    containerOne.appendChild(h2);

    const text = document.createElement('p');
    text.textContent = field.p;


    containerOne.appendChild(text);
    document.getElementById('blog-content').appendChild(containerOne);


  }
