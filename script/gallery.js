
const flexContainer = document.querySelectorAll(".main__flex-container");
const flexItems = document.getElementsByClassName("main__flex-item");

const galeriaFlexContainer = document.createElement("div");
galeriaFlexContainer.classList.add("galeria__flex-container");


// FUNCION PARA DEJAR DE MOSTRAR TITULOS PROYECTOS

const titulos = document.querySelectorAll(".main__design-title")




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
    constructor(cantidadImg, id, extension){
        this.id = id;
        this.cantidadImg = cantidadImg;
        this.extension = extension;
    }

    createFlexItems = () =>{
        for (let element of titulos){
            element.style.display = "none"
        };
         for (let element of flexContainer){
         element.innerHTML = "";
         element.appendChild(returnButtonContainer);
         element.appendChild(galeriaFlexContainer);} 
       

       // flexContainer.innerHTML = "";
       // flexContainer.appendChild(returnButtonContainer)
        //flexContainer.appendChild(galeriaFlexContainer)
       
        for (let i= 0; i < this.cantidadImg; i++){    //MODIFICAR i SEGUN CANTIDAD DE IMAGENES
            let galeriaFlexItem = document.createElement("div");
            galeriaFlexItem.classList.add("galeria__flex-item");
            galeriaFlexContainer.appendChild(galeriaFlexItem);
            if(this.extension == "png"){
                galeriaFlexItem.classList.add("galeria__flex-item-img");
                galeriaFlexItem.classList.add("imagen");
                galeriaFlexItem.style.backgroundImage = `url(./img/${this.id}/img-${i}.png)`;
            } else {
                galeriaFlexItem.innerHTML = `<video src=./img/${this.id}/vid-${i}.${this.extension} class="galeria__flex-item video" controls loop muted style="width : auto"></video>`
            }
            
            galeriaFlexItem.style.backgroundPosition = "center";
        }
    }
}



// DECLARANDO OBJETOS SECCIÓN DISEÑO

const mamboVisual = new CategoryFlexItem(8,"mambo-visual", "png");
const elNexo = new CategoryFlexItem(4,"el-nexo","png");
const portalVape = new CategoryFlexItem(6,"portalvape","png");
const prisma = new CategoryFlexItem(4,"prisma","png");
const glasgow = new CategoryFlexItem(4,"glasgow-beer","png");
const drom = new CategoryFlexItem(10,"drom","png");
const garageStore = new CategoryFlexItem(4,"garage-store","png");
const campañasAvril = new CategoryFlexItem(7,"campañas-avril","png");
const flyersAvril = new CategoryFlexItem(19,"flyers-avril","png");
const carrouselesAvril = new CategoryFlexItem(8,"carrouseles-avril","png");
const papeleriaAvril = new CategoryFlexItem(15,"papeleria-avril","png");

// DECLARANDO OBJETOS SECCIÓN MOTION

const reels = new CategoryFlexItem(17,"reels", "webm")
const historiasAnimadas = new CategoryFlexItem(15,"historias-animadas", "webm")
const animacionesVarias = new CategoryFlexItem(5,"animaciones-varias", "mp4")
const historiasCampañaAvril = new CategoryFlexItem(12,"historias-campaña-avril", "webm")

const designObjects = [mamboVisual,elNexo,portalVape,prisma,glasgow,drom,garageStore,campañasAvril,
    flyersAvril,carrouselesAvril,papeleriaAvril, reels,historiasAnimadas,animacionesVarias,historiasCampañaAvril];



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
                    window.scrollTo(0,140);
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
            if(element.classList[1] == "video"){
                return "video"
            }

            if(element.classList[2] == "imagen" && !clicked && window.innerWidth >= 1024){
           
                
                function controlOpacity() {
                    element.style.opacity ="100"
                }
                
                for (let element of galleryFlexItem){
                   element.style.display = "none";
                }    
                    actualScrollY = window.scrollY
                    element.style.opacity = "0"
                    element.style.display = "block"
                    element.style.width = "100%";
                    element.style.height = "800px";
                    setTimeout(controlOpacity, 200)
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



