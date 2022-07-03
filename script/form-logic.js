const contactForm = document.querySelector("#gform");
const submitButton = document.querySelector("#submit")
const message = document.createElement("span");
const inputs = document.querySelectorAll(".contacto__formulario__contenedor__input")

const resetInputs = () => {
    inputs.forEach((e) =>{
        e.value = ""
    });
}

const messageAfterSubmit = () => {
    message.remove();
    message.classList.add("contacto__formulario--submited");
    message.textContent = "Form submited!";
    message.style.transform = "scaleY(1)";
    contactForm.appendChild(message);
    setTimeout(resetInputs,500);
}

contactForm.onsubmit = messageAfterSubmit;

