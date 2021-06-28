//when you click on a img in a dog card, i want the alert to display that dogs bio, name, and cost, since i don't know jack shit enough about
//the "this"  im gonna jankily select the appriote elments somehow

//make dog cards variable by selecting dog img
const dogCards = document.querySelectorAll(".dog_cards img");
//add a click event to each card img with a for loop
// console.log(dogCards)
for (let i = 0; i < dogCards.length; i++) {
    dogCards[i].addEventListener('click', () => {
        //that events callback function needs to get the children of the cards inner text and display it
        //define name

        let name = dogCards[i].nextElementSibling;

        //define cost
        let cost = dogCards[i].nextElementSibling.nextElementSibling;



        //difine bio
        let bio = dogCards[i].nextElementSibling.nextElementSibling.nextElementSibling; //i know this is not ideal but I don't know a better way at the moment;

        // console.log(bio);
        //format alert with template literals and line breaks
        alert(`Name: ${name.textContent} \n Cost: $${cost.textContent.slice(-6)} \n Bio: ${bio.textContent}`)
    })
}


console.log(dogCards[0].nextElementSibling)

//assign total variable to total span;
// let totalDisplay = document.querySelector('#total');
// // //maybe you need to define cost outside of function?


// let total = 0;

// //create a variable of all adoptmeButtons we will add event listenter to later
// let adoptMeButtons = document.querySelectorAll(".dog_cards button");
// //iterate over all buttons to add event to each button
// for (let i = 0; i < adoptMeButtons.length; i++) {
//     adoptMeButtons[i].addEventListener('click', () => {
//         // total += 123.45;
//         // totalDisplay.textContent = total;
//         //dont know how to get to the element with cost id so crawlling up elements, i know this is not ideal...
//         let cost = parseFloat(adoptMeButtons[i].previousElementSibling.previousElementSibling.innerHTML.slice(-6));


//         // console.log(cost);
//         // console.log(cost.toFixed(2))
//         total += cost
//             // console.log(total)
//             // console.log(total.toFixed(2));
//         totalDisplay.textContent = total.toFixed(2);
//         //convert back to string so you never have more than two decimal spaces.
//         totalDisplay.textContent = totalDisplay.textContent.toString().slice(0, 6);
//         alert(`Total cost to adopt: $${totalDisplay.textContent}`)

//     })
// }
//************************************************************************************************************************************************** */
//need to refactor so your not 'crawling element' with previousElementSibling, 
//can us element.queryselect("class or id or element that is child of parent") to point to element see immediate below
//
// let example = document.querySelector(".dog_cards");
// console.log(example);
// let header = example.querySelector('h3');
// console.log(header)
//*********************************************************************************************************************************** */
// let button = document.querySelector(".dog_cards button");
// console.log(button);
// let previous = button.previousElementSibling;
// console.log(previous);
// let cost = previous.previousElementSibling;
// cost = parseFloat(cost.innerHTML.slice(-6));
// // cost = parseFloat(cost);
// let number = parseFloat(button.previousElementSibling.previousElementSibling.innerHTML.slice(-6));
// console.log(number);
// console.log(typeof(cost))
// console.log(cost + cost);

//********************************************************************************************************************************** */
// //target total span                                     
// let display = document.querySelector('#total');
// // //create totals variables;
// let total = 0;
// let cost = 0;
// //create a variable of all buttons
// let buttons = document.querySelector(".dog_cards button");
// //add click event with loop
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         //get pervious sibling till we get to cost, lol
//         cost = parseFloat(button.previousElementSibling.previousElementSibling.innerHTML.slice(-6));

//         total += cost;
//         display.textContent = total;
//         console.log(cost);
//     })
//     console.log(cost);
// }
//************************************************************************************************************************************************ */
//parse cost and add to total variable
//display total = total




// function dogInfo() {
//     total.textContent = "$123.45";
// }

// let total = document.querySelector("#total").innerHTML;
// total = +(total.slice(1));
// console.log(total);

// console.log(Number.isInteger(total));

// //assign cards buttons to variable
// let adoptMeButtons = document.querySelectorAll(".dog_cards button");
// console.log(adoptMeButtons);

// for (let button of adoptMeButtons) {
//     button.addEventListener('click', add);
// }

// function add() {
//     total.textContent = 123;
//     return total;
// }




// let individualCost = document.querySelectorAll(".dog_cards .cost")
// console.log(individualCost[0].innerHTML);
// let costAsNumber = individualCost[0].innerHTML.slice(-6);
// console.log(costAsNumber);

//gonna have to add a span element to each button or look up the find method?
//class of button
//add transiftion of 0.5s to button css
//add span into middle of  button
//may need to style a link that looks like a button?


// $(function() {
//     console.log('DOM is ready, js loading!');



//     //select all dog images
//     $('.btn').on('mouseenter', (function(e){
//         console.log('mouse has entered');
//         x = e.pageX - $(this).offset().left;
//         y = e.pageY - $(this).offset().top;
//         $(this).find('span').css({ top: y, left: x })
//     })
//     $('.btn').on('mouseout', function(e) {
//         x = e.pageX - $(this).offset().left;
//         y = e.pageY - $(this).offset().top;
//         $(this).find('span').css({ top: y, left: x })
//     })
// });

$(function(e) {
    $('.btn').on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({ top: y, left: x })
    })
    $('.btn').on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({ top: y, left: x })
    })
})

$(function(e) {
    $('.dog_cards button').on('mouseenter', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({ top: y, left: x })
    })
    $('.dog_cards button').on('mouseout', function(e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({ top: y, left: x })
    })
});


//need to make a jquery funcition that will convert the inners of '#total' to a number then add the other inners of the cost variables to "#total"
//click on adopt button, get the sibling elements with # of cost innerText, convert to a number, add it to span with
//# of totals innerText

//create global newTotal variable, we will add to the newTotal variable everytime the adopt button is clicked
let newTotal = 0;
//select elements to add click fucntion to using jquery
let price = $('.btn').click(function() {


    //console.log($(this).siblings(".cost").text().slice(-6));
    //set cost variable to get innerText of element and convert it to number
    let cost = parseFloat($(this).siblings(".cost").text().slice(-6));
    //every time the element is clicked, update global newtotal variable
    newTotal += cost;
    newTotal

    //console.log($('#total').text());
    //select total span in header, set its innerText to the value of newTotal 
    $('#total').text(newTotal.toFixed(2));
    alert(`Total cost to adopt: $${newTotal.toFixed(2)}`)

});