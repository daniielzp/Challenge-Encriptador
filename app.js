// Elementos para ocultar-mostrar en la página:
let imagen = document.getElementById('imagenOculta');
let tituloinfo = document.getElementById('tituloOculto');
let textoOutput = document.getElementById('textoOutput');
let botonCopiar = document.getElementById('botonCopiar');

// Función que obtendrá el texto que el usuario escribió en el textarea:
function obtenerTextoUsuario() {
    var textoUsuario = document.getElementById('textoUsuario').value
    return textoUsuario;
}

// Función que oculta los elementos al momento de regresar el texto:
function ocultarItems() {
    // Ocultamos estos elementos:
    imagen.setAttribute('hidden', 'true');
    tituloinfo.setAttribute('hidden', 'true');
    // Aparecemos el botón Copiar:
    botonCopiar.removeAttribute('hidden');
}

// Función que muestra los elementos si el usuario no ha ingresado nada:
function mostrarItems() {
    // Mostramos estos elementos:
    imagen.removeAttribute('hidden');
    tituloinfo.removeAttribute('hidden');
    // Ocultamos el botón copiar:
    botonCopiar.setAttribute('hidden', 'true');
    // Volvemos a colocar el texto que venía en la página:
    textoOutput.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
}

// Función que encripta el texto del usuario:
function encriptarTexto() {
    textoDesencriptado = obtenerTextoUsuario();
    if (textoDesencriptado !== "") {
        var textoEncriptado = textoDesencriptado
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        ocultarItems();
        textoOutput.innerHTML = textoEncriptado;
    } else {
        mostrarItems();
    }
}

// Función para desencriptar el texto del usuario:
function desencriptarTexto() {
    textoEncriptado = obtenerTextoUsuario();
    if (textoEncriptado !== "") {
        var textoDesencriptado = textoEncriptado
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        ocultarItems();
        textoOutput.innerHTML = textoDesencriptado;
    } else {
        mostrarItems();
    }
}

// Función para copiar el texto que ha encriptado o desencriptado:
function copiarTexto() {
    let texto = textoOutput.innerHTML
    navigator.clipboard.writeText(texto);
    alert('¡Texto copiado con éxito!');
}
