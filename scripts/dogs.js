const murphy = ["Murphy", "images/murphy-card.jpg", 'A dog named Murphy', 'Some Breed'];
const poppy = ["Poppy", "images/poppy-card.jpg", 'A dog named Poppy', 'Some Breed'];
const jack = ["Jack", "images/jack-card.jpg", 'Jack the beagle', 'Beagle'];
const duffy = ["Duffy", "images/duffy-card.jpg", 'A dog named Duffy', 'Some Breed'];
const lucas = ["Lucas", "images/lucas-card.jpg", 'A dog named Lucas', 'Some Breed'];
const jake = ["Jake", "images/jake-card.jpg", 'Jake the yellow lab', 'Yellow Lab'];
const angus = ["Angus", "images/angus-card.jpg", 'A dog named Angus', 'Some Breed'];
const violet = ["Violet", "images/violet-card.jpg", 'Violet the chocolate lab puppy', 'Chocolate Lab'];
const piper = ["Piper", "images/piper-card.jpg", 'A dog named Piper', 'Some Breed'];
const maximus = ["Maximus", "images/maximus-card.jpg", 'A dog named Maximus', 'Some Breed'];
const luna = ["Luna", "images/luna-card.jpg", 'A dog named Luna', 'Some Breed'];
const stella = ["Stella", "images/stella-card.jpg", 'A dog named Stella', 'Some Breed'];
const fee = 123.45

const all = [murphy, poppy, jack, duffy, lucas, jake,
	angus, violet, piper, maximus, luna, stella
];
const foot = document.getElementById("foot");
const dogs = document.createElement("section");

dogs.setAttribute("id", "maincontent");

function displayDogs(displayNumber) {

	// WHY DOESNT THIS WORK!
	/* 
	if (displayNumber>all.length) {
	    let displayNumber = all.length;
	    console.log(displayNumber)
	}*/

	for (let x = 0; x < displayNumber; x += 1) {
		const object = all[x];
		const dog = document.createElement("article");
		dog.setAttribute("class", "dog");
		const dogContent = document.createElement("div");
		dogContent.setAttribute("class", "info");
		const imagedog = document.createElement("img");
		imagedog.setAttribute("id", object[0]);
		imagedog.setAttribute("onclick", `about( '${object[0]}', '${object[3]}', ${fee})`);
		imagedog.setAttribute("src", object[1]);
		imagedog.setAttribute("alt", object[2]);
		const dogName = document.createElement("h3");
		dogName.textContent = object[0];
		const dogAmtLabel = document.createElement("h4");
		dogAmtLabel.textContent = " Cost to Adopt";
		const dogAmt = document.createElement("p");
		dogAmt.textContent = "$123.45";
		const dogParagraph = document.createElement("p");
		dogParagraph.textContent = "Corrum volorit iandae nimaxim cum restia volor reicid ut et etur sunt arum rendae pla endis re ea erum, qui doluptae"
		const dogAdopt = document.createElement("button");
		dogAdopt.setAttribute("id", object[0].toLowerCase());
		dogAdopt.setAttribute("onclick", `disableButton('${object[0].toLowerCase()}') `); /*adopt('${object[0].toLowerCase()}'); */
		dogAdopt.textContent = 'Adopt';

		dogContent.appendChild(imagedog);
		dogContent.appendChild(dogName);
		dogContent.appendChild(dogAmtLabel);
		dogContent.appendChild(dogAmt);
		dogContent.appendChild(dogParagraph);
		dogContent.appendChild(dogAdopt);
		dog.appendChild(dogContent);
		dogs.appendChild(dog);
	}
	document.body.insertBefore(dogs, foot);
}

//TEST IF STATEMENT
//displayDogs(15);
displayDogs(12);

//Maybe one day I can make this displayNumber=6 and
//display it on the index.html page