var Aboutcounter = 0;
$(window).scroll(function() {
    if (checkVisible($('#aboutContainer')) && Aboutcounter == 0) {
        showAbout();
        Aboutcounter = 1;
    } else {
        
    }
});

function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}

function showAbout() {
	document.getElementById("aboutContainer").style.display = "block";
}