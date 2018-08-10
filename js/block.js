var Aboutcounter = 0;
var paragraph1Counter = 0;
var paragraph2Counter = 0;
$(window).scroll(function() {
    if (checkVisible($('#aboutTitle')) && Aboutcounter == 0) {
        showAbout();
        Aboutcounter = 1;
    } else if (checkVisible($('#paragraphs')) && paragraph1Counter == 0) {
        showParags();
        paragraph1Counter = 1;
    } else if (checkVisible($('#paragraphs2')) && paragraph2Counter == 0) {
        showParags2()
        paragraph2Counter = 1;
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
	document.getElementById("aboutTitle").style.display = "block";
}

function showParags() {
    document.getElementById("paragraphs").style.display = "block";
}

function showParags2() {
    document.getElementById("paragraphs2").style.display = "block";
}