var Aboutcounter = 0;
var paragraph1Counter = 0;
var paragraph2Counter = 0;
var expTitleCounter = 0;
var expTitleDesc1Counter = 0;
var expTitleDesc2Counter = 0;
var expCompany1Counter = 0;
var expCompany2Counter = 0;
$(window).scroll(function() {
    if (checkVisible($('#aboutTitle')) && Aboutcounter == 0) {
        showAbout();
        Aboutcounter = 1;
    } else if (checkVisible($('#paragraphs')) && paragraph1Counter == 0) {
        showParags();
        paragraph1Counter = 1;
    } else if (checkVisible($('#paragraphs2')) && paragraph2Counter == 0) {
        showParags2();
        paragraph2Counter = 1;
    } else if (checkVisible($('#appear')) && expTitleCounter == 0) {
        showExpTitle();
        expTitleCounter = 1;
    } else if (checkVisible($('#latestExpDesc')) && expTitleDesc1Counter == 0) {
        showExpDesc1();
        expTitleDesc1Counter = 1;
    } else if (checkVisible($('#latestExpDesc2')) && expTitleDesc2Counter == 0) {
        showExpDesc2();
        expTitleDesc2Counter = 1;
    } else if (checkVisible($('#company1')) && expCompany1Counter == 0) {
        showCompany1();
        expCompany1Counter = 1;
    } else if (checkVisible($('#company2')) && expCompany2Counter == 0) {
        showCompany2();
        expCompany2Counter = 1;
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

function showExpTitle() {
    document.getElementById("expTitle").style.display = "block";
}

function showExpDesc1() {
    document.getElementById("latestExpDesc").classList.add("pop");
}

function showExpDesc2() {
    document.getElementById("latestExpDesc2").classList.add("pop");
}

function showCompany1() {
    document.getElementById("company1").classList.add("pop");
}

function showCompany2() {
    document.getElementById("company2").classList.add("pop");
}