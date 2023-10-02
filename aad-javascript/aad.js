// Index & Blog Page

const d1Name = "Murphy";
const d2Name = "Poppy";
const d3Name = "Jack";
const d4Name = "Duffy";
const d5Name = "Lucas";
const d6Name = "Jake";
const d7Name = "Angus";
const d8Name = "Violet";
const d9Name = "Piper";
const d10Name = "Maximus";
const d11Name = "Luna";
const d12Name = "Stella";

const breed = "Canis lupus familiaris";
const fee = Number(123.45);

function dogProfile(a, b, c) {
    return "Dog Selection:    " + a + '\nBreed:    ' + b + '\nAdoption Fee:   $' + c;
}

function adoptionPrice(c) {
    return 'Adoption Fee:\n\n$' + c;
}

$(function() {
    $('.card-img').mouseenter(function() {
        $(this).fadeTo('slow', .75)
    }).mouseleave(function () {
        $(this).fadeTo('fast', 1)
    });

    $('.cardBtn').mouseenter(function() {
        $(this).css('box-shadow', '10px 10px 5px #888');
    }).mouseleave(function() {
        $(this).css('box-shadow', '0px 0px 0px #000000');
    })
});