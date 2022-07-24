
const flexContainer = document.querySelector(".main__flex-container");
const flexItems = document.getElementsByClassName("main__flex-item");

const galeriaFlexContainer = document.createElement("div");
galeriaFlexContainer.classList.add("galeria__flex-container");




//BOTON RETURN
const returnButtonContainer = document.createElement("div")
returnButtonContainer.classList.add("return-button__container");
const returnButton = document.createElement("i");
returnButton.classList.add("fa-solid", "fa-arrow-left");
returnButtonContainer.appendChild(returnButton);

returnButtonContainer.addEventListener("click", ()=>{
   
    if (clicked){
       for(let element of galleryFlexItem){
        element.style.display = "unset"
        element.style.width = "600px";
        element.style.height = "400px";
        element.style.backgroundSize = "cover"
        clicked = false;
        window.scrollTo(0,actualScrollY)
       } 
    }else {
        location.reload();
    }
})


// CREANDO CLASE Y OBJETOS CATEGORIAS GALERIA

class CategoryFlexItem {
    constructor(cantidadImg, id){
        this.id = id;
        this.cantidadImg = cantidadImg;
    }

    createFlexItems = () =>{
        flexContainer.innerHTML = "";
        flexContainer.appendChild(returnButtonContainer);
        flexContainer.appendChild(galeriaFlexContainer);
        for (let i= 0; i < this.cantidadImg; i++){    //MODIFICAR i SEGUN CANTIDAD DE IMAGENES
            let galeriaFlexItem = document.createElement("div");
            galeriaFlexItem.classList.add("galeria__flex-item");
            galeriaFlexContainer.appendChild(galeriaFlexItem);
            galeriaFlexItem.style.backgroundImage = `url(./img/${this.id}/img-${i}.png)`;
            galeriaFlexItem.style.backgroundPosition = "center";
        }
    }
}

// DECLARANDO OBJETOS

const mamboVisual = new CategoryFlexItem(8,"mambo-visual");
const elNexo = new CategoryFlexItem(4,"el-nexo");
const portalVape = new CategoryFlexItem(6,"portalvape");
const milena = new CategoryFlexItem(3,"milena");
const prisma = new CategoryFlexItem(4,"prisma");
const glasgow = new CategoryFlexItem(4,"glasgow-beer");

const designObjects = [mamboVisual,elNexo,portalVape,milena,prisma,glasgow];





const handleFlexItems = () =>{
    for (let i = 0; i < flexItems.length; i++){
        flexItems[i].addEventListener("click", ()=>{
            let clickedItemID = flexItems[i].id
            for (let element of flexItems){
                element.style.opacity = 0;
            }
            for (let i= 0; i< designObjects.length ; i++){
                if (designObjects[i].id == clickedItemID){
                    designObjects[i].createFlexItems();
                    handleGalleryFlexItems();
                } 
            }
        })
    }
}


// EVENTOS ON CLICK PARA FLEX-ITEMS GALERIA

const galleryFlexItem = document.getElementsByClassName("galeria__flex-item");

var clicked = false // VARIABLE PARA SABER SI UNA IMAGEN DE LA GALERIA ESTA ACTIVAMENTE CLICKEADA.

var actualScrollY ; // VARIABLE PARA SABER EL SCROLL ACTUAL Y UTILIZARLO PARA VOLVER DONDE ESTABAMOS ANTES DE AMPLIAR IMAGEN

const handleGalleryFlexItems = ()=>{
    
    for (let element of galleryFlexItem){
        element.addEventListener("click",()=>{
            if(!clicked && window.innerWidth >= 1024){
                for (let element of galleryFlexItem){
                   element.style.display = "none"
                }
                    actualScrollY = window.scrollY
                    element.style.display = "block"
                    element.style.width = "100%";
                    element.style.height = "800px";
                    element.style.backgroundSize = "contain"
                    window.scrollTo(0,140);
                    clicked = true;
            } else if (clicked && window.innerWidth >= 1024) {

                for (let element of galleryFlexItem){
                    element.style.display = "unset"
                    element.style.width = "600px";
                    element.style.height = "400px";
                    element.style.backgroundSize = "cover"
                    clicked = false;
                    window.scrollTo(0,actualScrollY)
                }
            }
           
            
        })
    
    }
}




handleFlexItems();



