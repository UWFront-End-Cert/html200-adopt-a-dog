/* Add Header to Page */
document.getElementById("blog-h1").innerHTML = "Adopt A Dog";



/* Add Images to Posts */
const addImg1 = document.createElement('img');
const imgFile1 = document.getElementById('blog-1');
imgFile1.insertBefore(addImg1, imgFile1.firstChild);
addImg1.src = 'images/blog-1.jpg';
addImg1.alt = 'Dog with owner looking out over canyon.';
addImg1.width = '225';
addImg1.style.cssFloat = 'left';
addImg1.style.paddingRight = '2rem';

const addImg2 = document.createElement('img');
const imgFile2 = document.getElementById('blog-2');
imgFile2.insertBefore(addImg2, imgFile2.firstChild);
addImg2.src = 'images/blog-2.jpg';
addImg2.alt = 'Multiple dogs on leashes sitting in a park, looking at dogwalker';
addImg2.width = '225';
addImg2.style.cssFloat = 'left';
addImg2.style.paddingRight = '2rem';

const addImg3 = document.createElement('img');
const imgFile3 = document.getElementById('blog-3');
imgFile3.insertBefore(addImg3, imgFile3.firstChild);
addImg3.src = 'images/blog-3.jpg';
addImg3.alt = 'Silhoutte of woman and dog against a sunset, holding up a ball as if about to throw it';
addImg3.width = '225';
addImg3.style.cssFloat = 'left';
addImg3.style.paddingRight = '2rem';



/* Add Copy to Posts */
const postOne = document.getElementById('blog-1');
postOne.getElementsByTagName('h3')[0].innerHTML = "Traveling With Your Dog";
postOne.getElementsByTagName('p')[0].innerHTML = "Here is some information about traveling \
    with dogs. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at.";
postOne.getElementsByTagName('p')[1].innerHTML = "Uptiusd andesci qui nem aut vendion ectur? \
    Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat \
    que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni \
    solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con \
    nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";


const postTwo = document.getElementById('blog-2');
postTwo.getElementsByTagName('h3')[0].innerHTML = "How To Walk Multiple Dogs";
postTwo.getElementsByTagName('p')[0].innerHTML = "Here is some information about walking \
    multiple dogs. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at.";
postTwo.getElementsByTagName('p')[1].innerHTML = "Uptiusd andesci qui nem aut vendion ectur? \
    Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat \
    que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni \
    solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con \
    nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";


const postThree = document.getElementById('blog-3');
postThree.getElementsByTagName('h3')[0].innerHTML = "Teach Your Dog to Fetch!";
postThree.getElementsByTagName('p')[0].innerHTML = "Here is some information about teaching your \
    dog to fetch. Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor \
    incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at.";
postThree.getElementsByTagName('p')[1].innerHTML = "Uptiusd andesci qui nem aut vendion ectur? \
    Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat \
    que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni \
    solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con \
    nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";
