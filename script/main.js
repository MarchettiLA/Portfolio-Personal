
const headerNav = document.querySelector(".header__nav");
const navMenuButton = document.createElement("div");
navMenuButton.classList.add("nav__mobile-button");
const barras = document.createElement("i");
barras.classList.add("fa-solid", "fa-bars", "nav__mobile-button__barras");

const navList = document.querySelector(".nav__lista");
const navItems = document.querySelectorAll(".nav__item");


//PROYECTOS NAV INTERACCION
const proyectosItemList = document.querySelectorAll(".proyectos__item-container");
const proyectosFlecha = document.querySelector("#select-arrow");

const handleProyectSelect = ()=>{
    proyectosFlecha.addEventListener("click", ()=>{
        proyectosItemList.forEach( e =>{
            if(e.style.display == "none" || e.style.display == ""){
                e.style.display = "flex"
                setTimeout(()=>e.style.opacity = 1, 200)
            } else{
                e.style.opacity = 0
                setTimeout(()=> e.style.display = "none", 600)
            }
        })
    })
    
}

handleProyectSelect();


// CUANDO TODO ESTA CON MAXIMA OPACIDAD SE MODIFICA A TRUE
let ready = false;

//AGREGANDO NAV-MENU__BUTTON

headerNav.appendChild(navMenuButton);
navMenuButton.appendChild(barras);

const responsiveInterval = () =>{
    if (window.innerWidth > 1340){
        navMenuButton.style.display = "none"
    } else {
        navMenuButton.style.display = "inline-block"
    }
}

setInterval(responsiveInterval, 200)

//EVENTO QUE ABRE Y CIERRA MENU MOBILE

const navItemLink = document.querySelectorAll(".nav__item--link");

const hideAndShowNavItemLinks = () => {
    navItemLink.forEach((e)=>{
        if(e.style.display == "none" || e.style.display == ""){
            e.style.display = "block";
        } else {
            e.style.display = "none";
        }
    })
}

navMenuButton.addEventListener("click",abrirYCerrarNavMenu =()=>{
    if(navList.style.opacity == 0 && !ready){
        navList.style.transition = "height 0.5s, opacity 1s"
        navList.style.opacity = 1
        navList.style.height = "30vh"
        ready = true;
        hideAndShowNavItemLinks();
    } else  {
        ready = false
        navList.style.transition = "height 1s, opacity 0.5s"
        navList.style.opacity = 0
        navList.style.height = 0
        hideAndShowNavItemLinks();
    }
})
window.addEventListener("load", ()=> {
    navMenuButton.style.opacity = 1;
    navMenuButton.style.transition = "all 2s"
})



//REDIRECCION DE NAV ITEMS

const urls = ["#sobre-mi", "#web", "#design", "#formacion", "#proyectos", "#contacto"];

// CERRAR NAV MENU MOBILE AL SELECCIONAR UNA OPCION

const navItemsLinks = document.querySelectorAll(".nav__item a")

for (let i=0;i<navItems.length;i++){
        navItems[i].addEventListener("click", ()=>{
        if (ready && window.innerWidth <= 885){
            navMenuButton.click();
            setTimeout(()=>{
                navItemsLinks[i].href = urls[i];
                navItemsLinks[i].click();
                navItemsLinks[i].removeAttribute("href");
            }, 350)
            
        }        
        })
     }


// OPACIDAD NAV MENU ONLOAD

const navName = document.querySelector(".nav__name");


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
