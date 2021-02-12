let tailles = ['small', 'medium', 'large', 'huge'];
let taillesm = ['large', 'huge'];
let colors = ['white', 'lightgoldenrodyellow', 'antiquewhite', 'lightyellow', 'gold', 'goldenrod'];

let target = ["#home", "#me", "#timeline", "#skills", "#projects", "#contact"];
let theTarget = 0;

let menuNav = document.querySelector("nav");


let nbEtoiles = 220;
let nbEtoilesMouvante = 3;

let lucioles = document.querySelectorAll(".lucioles");

let skillbar = document.querySelectorAll(".skillbar");

let gridItemP = document.querySelectorAll(".grid-itemP");
let lightbox = document.getElementById("lightbox");

let tableauNomSkilll = ["HTML", "CSS", "PHP", "JS", "C", "C#", "PYTHON", "MCD MLD", "SQL", "FRENCH", "ENGLISH", "SPANISH", "KRITA", "ILLUSTRATOR", "PHOTOSHOP", "ADOBE XD"]


for (let i = 0; i < skillbar.length; i++) {
    let span = skillbar[i].querySelector("span");

    let val = span.innerText

    span.style.width = (val) + "%"
    console.log(span.style.width)
    span.innerText = tableauNomSkilll[i];



}

window.addEventListener('DOMContentLoaded', function () {
    let hauteurFenetre = 100;
    let offset = 0;

    for (let l of lucioles) {

        drawStars(l, offset);
        drawStarsLight(l, offset);
        offset += hauteurFenetre;
        // console.log(l)
    }

});






function drawStars(stars, offset) {
    let starsContainer = _("div", "", stars, "starsContainer");
    for (let i = 0; i < nbEtoiles; i++) {
        let div = _('div', '', document.querySelector('.starsContainer'), 'etoile');
        div.classList.add(tailles[random(0, tailles.length - 1)]);
        div.style.left = random(0, 98) + 'vw';
        div.style.top = random(0, 97) + offset + 'vh';
        div.style.backgroundColor = colors[random(0, colors.length - 1)];
        div.style.animation = "2s ease " + (Math.random() * (1 - 0 + 1)) + 0 + "s etoile infinite";

    }
}

function drawStarsLight(starsLight, offset) {
    let night = _("div", "", starsLight, "night");
    night.style.top = offset + "vh";
    for (let i = 0; i < nbEtoilesMouvante; i++) {
        let div = _('div', '', night, 'star');
        div.classList.add(taillesm[random(0, taillesm.length - 1)]);
        div.style.left = random(0, 98) + 'vw';
        div.style.top = random(0, 97) + 'vh';
        div.style.background = "linear-gradient(-45deg," + colors[random(0, colors.length - 1)] + ", rgba(0,0,0,1))";
        div.style


    }
}







/*Scroll molette d'un coup*/
window.addEventListener('wheel', function (event) {

    if (event.deltaY < 0) {
        scrollUp();
    }
    else {
        scrollDown();
    }
})


function setLocation(i) {
    location.hash = target[i];
    console.log(i)

}


function scrollUp() {
    if (theTarget > 0) {
        theTarget--;
        setLocation(theTarget);
    }

}

function scrollDown() {
    if (theTarget < target.length - 1) {
        theTarget++;
        setLocation(theTarget);
    }
}





/*fonction creatrice d'élément*/
function _(tag, content, parent, taille = null, id = null) {
    let tagg = document.createElement(tag);
    tagg.innerHTML = content;
    if (taille)
        tagg.classList.add(taille);
    if (id)
        tagg.id = id;
    parent.appendChild(tagg);
    return tagg;
}




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




for (let i = 0; i < menuNav.children.length; i++) {
    menuNav.children[i].addEventListener('click', function () {
        console.log(menuNav.children[i].getAttribute("href"));
        theTarget = i;
        setLocation(theTarget);

    });
}


target.forEach((value, i) => {
    if (value == location.hash) {
        theTarget = i;
        setLocation(theTarget);
        return;
    }

});




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1 
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
   
    slides[slideIndex - 1].style.display = "block";
}
