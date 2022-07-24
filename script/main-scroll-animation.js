//OPACIDAD Y MOVIMIENTO SOBRE MI SCROLL

const aboutMeImg = document.querySelector(".sobre-mi__imagen");

const showAboutMeImg = () => {
    aboutMeImg.classList.replace("invisible", "visible");
    aboutMeImg.style.transform = "none"
}

window.addEventListener("scroll", showAboutMeImg);
