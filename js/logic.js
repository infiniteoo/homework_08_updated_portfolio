
$(document).ready(function () {


    $(".typed").each(function () {
        var typed = new Typed('.typed', {
            stringsElement: '.typed-strings',
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
        });
    });
   
});





