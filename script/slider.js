const buttonAnterior = document.querySelectorAll(".menu__line--anterior");
const buttonSiguiente = document.querySelectorAll(".menu__line--siguiente");
const SliderImg = document.querySelectorAll(".slider-container__img--img");

let contador = 0;
let contadorSliders = 0;
let maximo = false
let minimo = false

/*


buttonSiguiente[contadorSliders].addEventListener("click", (event)=>{

if(contador <= 2){
    SliderImg[contador+1].style.opacity = 1;
    SliderImg[contador].style.opacity = 0;
    contador += 1
}

})
*/

class Slider {
    constructor(contadorSlider,contador,primerImg,ultimaImg){
        this.contadorSlider = contadorSlider;
        this.contador = contador;
        this.primerImg = primerImg;
        this.ultimaImg = ultimaImg;
    }
    siguiente(){
        buttonSiguiente[this.contadorSlider].addEventListener("click", ()=>{

            if(this.contador <= this.ultimaImg -1){
                SliderImg[this.contador+1].style.opacity = 1;
                SliderImg[this.contador].style.opacity = 0;
                this.contador += 1
            }
            
            })
    }

    anterior(){
        buttonAnterior[this.contadorSlider].addEventListener("click", (event)=>{
            if(this.contador > this.primerImg){
                SliderImg[this.contador].style.opacity = 0;
                SliderImg[this.contador-1].style.opacity = 1;
                this.contador -= 1
            }
         
        })
    }
}

const slider0  = new Slider(0,0,0,1)
const slider1  = new Slider(1,2,2,3)
const slider2  = new Slider(2,4,4,5)
const slider3  = new Slider(3,6,6,7)
const coleccionSliders = [slider0,slider1,slider2,slider3];

function iniciarEventos(){
    for (let i=0; i<coleccionSliders.length;i++){
        coleccionSliders[i].siguiente();
        coleccionSliders[i].anterior();
        
    }
}

iniciarEventos()


