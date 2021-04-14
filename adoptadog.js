const names = ['Murphy','Poppy','Jack','Duffy','Lucas','Jake','Angus','Violet','Piper','Maximus','Luna','Stella'];
const breed = ['German Shepherd/Bull','Cockapoo','Beagle','American Pitbull Terrier','notaboxer','Labrador Retriever','Bullmastiff','Labrador','Golden Retriever','Border Terrier','Labrador Retriever','Chihuahau'];
const costToAdopt = ['123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45','123.45'];

function puppyCard(x) {
  alert(names[x] + ' is ready to meet you!\n\n Breed: '+ breed[x] + '\n\n Cost to Adopt  $' + costToAdopt[x] );
}

let clicks = 0;
function adopt() {
  clicks += 1;
    function addToCart() {
      let adoptionCost = 123.45;
      let cartTotal = 0;
      let runner = adoptionCost * clicks;
      return runner;
    }
    console.log(addToCart());
    alert('Your cart total is: '+(addToCart()));
    document.getElementById("cartUpdate").innerHTML = "$" + addToCart().toFixed(2)
    };


    function insertAfter(newNode, existingNode) {
    	existingNode.parentNode.insertBefore(newNode,existingNode.nextSibling);
    }

    const pupInfo = [
    	{
    		name: 'Murphy',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/murphy-card.jpg',
    		alt: 'murphy\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(0)',
    	},
    	{
    		name: 'Poppy',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/poppy-card.jpg',
    		alt: 'poppy\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(1)',
    	},
    	{
    		name: 'Jack',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/jack-card.jpg',
    		alt: 'jack\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(2)',
    	},
    	{
    		name: 'Duffy',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/duffy-card.jpg',
    		alt: 'duffy\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(3)',
    	},
    	{
    		name: 'Lucas',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/lucas-card.jpg',
    		alt: 'lucas\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(4)',
    	},
    	{
    		name: 'Jake',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/jake-card.jpg',
    		alt: 'jake\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(5)',
    	},
    	{
    		name: 'Angus',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/angus-card.jpg',
    		alt: 'angus\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(6)',
    	},
    	{
    		name: 'Violet',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/violet-card.jpg',
    		alt: 'violet\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(7)',
    	},
    	{
    		name: 'Piper',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/piper-card.jpg',
    		alt: 'piper\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(8)',
    	},
    	{
    		name: 'Maximus',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/maximus-card.jpg',
    		alt: 'maximus\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(9)',
    	},
    	{
    		name: 'Luna',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/luna-card.jpg',
    		alt: 'luna\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(10)',
    	},
    	{
    		name: 'Stella',
    		image: 'https://anthonyjprater.github.io/html200-adopt-a-dog/images/stella-card.jpg',
    		alt: 'stella\'s profile card',
    		text: 'Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae',
    		onclick: 'puppyCard(11)',
    	},
    ];

    const pupsMain = document.getElementById('pups-main');
    const dogList = document.createElement('h2');
    dogList.textContent = "Here Are All Our Dogs!";
    dogList.setAttribute('class','all-our-dogs');
    pupsMain.appendChild(dogList);

    /*Loop Here*/

    for (let i= 0; i < pupInfo.length; i++) {

    const profile = document.createElement('article');
    profile.setAttribute('class','pup-profile');
    pupsMain.appendChild(profile);

    const profilePic = document.createElement('figure');
    profilePic.setAttribute('class','profile-pic');
    profile.appendChild(profilePic);
    const image = document.createElement('img');
    image.setAttribute('src', pupInfo[i].image);
    image.setAttribute('alt', pupInfo[i].alt);
    image.setAttribute('width','215');
    image.setAttribute('onclick',pupInfo[i].onclick);
    profilePic.appendChild(image);


    const pupstyle = document.createElement('div');
    pupstyle.setAttribute('class','pup-style');
    profile.appendChild(pupstyle);

    const pupname = document.createElement('h3');
    pupname.textContent = pupInfo[i].name;
    pupstyle.appendChild(pupname);

    const costOfAdopt = document.createElement('p');
    costOfAdopt.textContent = 'Cost to Adopt: ';
    pupstyle.appendChild(costOfAdopt);

    const price = document.createElement('p');
    const cost = document.createElement('b');
    cost.textContent = "Cost to Adopt";
    price.appendChild(cost);
    price.textContent = "$123.45";

    const pupDesc = document.createElement('p');
    pupDesc.textContent = pupInfo[i].text;
    pupstyle.appendChild(pupDesc);

    const adoptButton = document.createElement('button');
    adoptButton.setAttribute('class','adopt-this-dog');
    adoptButton.setAttribute('onclick','adopt()');
    adoptButton.textContent = 'Adopt';
    pupstyle.appendChild(adoptButton);

    }
