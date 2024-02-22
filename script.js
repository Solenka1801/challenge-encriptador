// Seleccion de elementos necesarios
const encriptarBtn = document.querySelector(".btn-encriptar");
const desencriptarBtn = document.querySelector(".btn-desencriptar");
const figura = document.querySelector(".contenedorfigura");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar");

// Enlaza el clic a las funciones correspondientes
encriptarBtn.addEventListener('click', () => procesarTexto('encriptar'));
desencriptarBtn.addEventListener('click', () => procesarTexto('desencriptar'));

// Función para ocultar o mostrar elementos luego de encriptar o desencriptar
function hideAll() {
    btnCopiar.classList.remove('oculto');
    figura.classList.add("oculto");
    contenedor.classList.add("oculto");
}

// Recupera el texto de la caja de texto
function recuperarTexto() {
    return document.querySelector(".cajatexto").value;
}

// Función para establecer si el texto se va a encriptar o desencriptar
function procesarTexto(tipo) {
    hideAll();
    const cajatexto = recuperarTexto();
    resultado.textContent = tipo === 'encriptar' ? encriptadorMain(cajatexto) : desencriptadorMain(cajatexto);
}

// Encriptador de texto
function encriptadorMain(mensaje) {
    const map = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
    return [...mensaje].map(char => map[char] || char).join('');
}

// Desencriptar el texto
function desencriptadorMain(mensaje) {
    const map = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
    return mensaje.replace(/ai|enter|imes|ober|ufat|./g, match => map[match] || match);
}

// Copia el texto al portapapeles y setea un timer para el mensaje de copiado
btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(resultado.textContent);
    btnCopiar.value = "Texto copiado!";
    setTimeout(() => btnCopiar.value = "Copiar", 2000);
});