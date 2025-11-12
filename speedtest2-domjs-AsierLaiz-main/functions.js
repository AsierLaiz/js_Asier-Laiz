window.addEventListener('load', () => {
    const Validar = document.getElementById('validar');
    const Asunto = document.getElementById('asunto');
    const info = document.querySelector('.informacion');

    info.style.display = "none";

    Validar.addEventListener('click', validar);

    Asunto.addEventListener('change', mostrarInfo);
});

function validar() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const info = document.querySelector('.informacion');

    const nombrevalores = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,20}$/;
    const mailvalores = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    nombre.style.border = "";
    email.style.border = "";

    if (!nombre.value.trim() || !nombrevalores.test(nombre.value)) {
        nombre.style.border = "2px solid red";
        nombre.focus();
        return;
    }

    if (!email.value.trim() || !mailvalores.test(email.value)) {
        email.style.border = "2px solid red";
        email.focus();
        return;
    }

    info.style.display = "block";


    
}

function mostrarInfo() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const form = document.querySelector('.formulario');

    const dupH2 = document.querySelector('.resultado-h2');
    const dupP = document.querySelector('.resultado-p');
    if (dupH2) dupH2.remove();
    if (dupP) dupP.remove();


    const h2 = document.createElement('h2');
    h2.classList.add('resultado-h2');
    h2.textContent = ` ${nombre},${email}`;

    const p = document.createElement('p');
    p.classList.add('resultado-p');
    p.textContent = ` ${asunto.toUpperCase()}`;

    form.appendChild(h2);
    form.appendChild(p);
}
