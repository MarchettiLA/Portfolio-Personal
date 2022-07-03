
const headerNav = document.querySelector(".header-nav");
const navMenuButton = document.createElement("div");
navMenuButton.classList.add("nav-mobile-button");
const barras = document.createElement("i");
barras.classList.add("fa-solid", "fa-bars", "nav-mobile-button__barras");

const navList = document.querySelector(".nav-lista");

headerNav.appendChild(navMenuButton);
navMenuButton.appendChild(barras);

const responsiveInterval = () =>{
    if (window.innerWidth > 885){
        navMenuButton.style.display = "none"
    } else {
        navMenuButton.style.display = "inline-block"
    }
}

setInterval(responsiveInterval, 200)


navMenuButton.addEventListener("click",()=>{
    if(navList.style.opacity == 0){
        navList.style.transition = "height 0.5s, opacity 1s"
        navList.style.opacity = 1
        navList.style.height = "30vh"
    } else  {
        navList.style.transition = "height 1s, opacity 0.5s"
        navList.style.opacity = 0
        navList.style.height = 0
    }
})

// OPACIDAD LANDING ONLOAD

const landingPage = document.querySelector(".header-quien-soy");

const showLandingPage = () => {
    landingPage.classList.replace("invisible","visible")
}

window.addEventListener("load",showLandingPage);

// OPACIDAD NAV MENU ONLOAD

const navName = document.querySelector(".nav-name");
const navItems = document.querySelectorAll(".nav-item");

const showNavItems = () => {
    transitionSec = 0.5
    for(let element of navItems){
        element.style.transition = `all ${transitionSec}s`;
        transitionSec += 0.5;
        element.classList.replace("invisible","visible");
        navName.style.opacity = 1;
    }
    setTimeout(normalizeTransition,2500)
}

const normalizeTransition = () => {
    for (let element of navItems){
        element.style.transition = `0.5s`
    }
}
window.addEventListener("load", showNavItems)

//OPACIDAD Y MOVIMIENTO

const aboutMeImg = document.querySelector(".sobre-mi__imagen");

const showAboutMeImg = () => {
    aboutMeImg.classList.replace("invisible", "visible");
    aboutMeImg.style.transform = "none"
}

window.addEventListener("scroll", showAboutMeImg);


// INTERACCIONES LETRAS QUIEN SOY - PRESENTACION 


// TRANSICION SOBRE MI

const aboutContainer = document.querySelector(".main-sobre-mi");
const aboutFont = document.querySelector(".sobre-mi__tipografia");
const aboutImg = document.querySelector(".sobre-mi__imagen");
const changeInsideOpacity = () => {
    aboutFont.style.opacity = 1
    aboutImg.style.opacity = 1
}
window.addEventListener("scroll",() => {
    aboutContainer.style.transform = "none"
    aboutContainer.style.opacity = 1
    
    setTimeout(changeInsideOpacity, 1000)

})