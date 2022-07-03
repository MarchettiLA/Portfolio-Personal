const contactForm = document.querySelector("#gform");
const submitButton = document.querySelector("#submit")
const message = document.createElement("span");
const inputs = document.querySelectorAll(".contacto__formulario__contenedor__input")

// FUNCION PARA RESETEAR INPUTS LUEGO DEL SUBMIT

const resetInputs = () => {
    inputs.forEach((e) =>{
        e.value = ""
    });
}

// FUNCION QUE GENERA EL MENSAJE LUEGO DEL SUBMIT

const messageAfterSubmit = () => {
    message.remove();
    message.classList.add("contacto__formulario--submited");
    message.textContent = "Mensaje enviado! En breve me estaré comunicando!";
    message.style.transform = "scaleY(1)";
    contactForm.appendChild(message);
    setTimeout(resetInputs,500);
}

contactForm.onsubmit = messageAfterSubmit;

