// L9 js file for dog page zoom feature, 
// window.onload loads window first then code
// useful chk to verify js file is accessible
// then switch to ready(function() {})

// window.onload = function() {
//     alert('welcome');
// };

$(document).ready(function() {
    $('img').addClass('zoom');
    $('h2').addClass('test');
});

    // want jQ hover to zoom img's but not working for now handling in css
    // $('img').hover(function(event) {
    //     function zoomimg() {
    //         let imgZoom = document.getElementsByClassName('zoom');
    //         let currWidth = $('img').width() + 100;
    //         'img'.src = $('img').width() + 100;
    //     };
         
    // });
