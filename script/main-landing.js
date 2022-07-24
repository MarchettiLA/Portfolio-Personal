
// OPACIDAD LANDING ONLOAD

const landingPage = document.querySelector(".header__quien-soy");

const showLandingPage = () => {
    landingPage.classList.replace("invisible","visible")
}

window.addEventListener("load",showLandingPage);

// TRANSICION SOBRE MI

const aboutContainer = document.querySelector(".main__sobre-mi");
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