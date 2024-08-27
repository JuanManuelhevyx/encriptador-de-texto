// inicializando variables y constantes
const letrasEncriptadas = ['ai','enter','imer','ober','ufat'];
const letrasDeReferencia = ['a','e','i','o','u'];
let textoAEncriptar = "";
let textoADesencriptar = "";
let textAreaPrincipal = document.getElementById('textAreaPrincipal');
let textareaResultado = document.getElementById('textareaResultado');
let btnCopiar = document.getElementById('btnCopiar');
let subtituloResultado = document.getElementById('subtituloResultado');
let parrafoResultado = document.getElementById('parrafoResultado');
let imagenResultado = document.getElementById('imagenResultado');
let btnDesencriptar = document.getElementById('btnDesencriptar');

// función de encriptado
function encriptar(){
    let resultado = "";
    textoAEncriptar = textAreaPrincipal.value;

    if(textoAEncriptar.length == 0){
        alert('El campo de texto está vacío');
    }else{
        for (let i = 0; i < textoAEncriptar.length; i++) {
            if(letrasDeReferencia.indexOf(textoAEncriptar[i]) != -1){
                resultado += letrasEncriptadas[letrasDeReferencia.indexOf(textoAEncriptar[i])];
            }else{
                resultado += textoAEncriptar[i];
            };
        };
    };

    textAreaPrincipal.value = '';
    textareaResultado.removeAttribute('hidden');
    btnCopiar.removeAttribute('hidden');
    textareaResultado.value = resultado;
    subtituloResultado.setAttribute('hidden',true);
    parrafoResultado.setAttribute('hidden',true);
    imagenResultado.setAttribute('hidden',true);
    btnDesencriptar.removeAttribute('disabled');
    textAreaPrincipal.classList.remove('flash');//remueve la clase que hace parpadear el textarea
    textareaResultado.classList.remove('flash');

    return;
};

// función de copiado
function copiar(){
    textareaResultado.focus();
    textareaResultado.select();
    textareaResultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textareaResultado.value);
    textareaResultado.classList.add('flash');
    return;
}

// función de desencriptado
function desencriptar(){
    let resultado = "";
    textoADesencriptar = textAreaPrincipal.value;

    if(textoADesencriptar.length == 0){
        alert('El campo de texto está vacío');
    }else{
        for (let i = 0; ;) {
            if (textoADesencriptar.length == i) break;
            if(letrasDeReferencia.indexOf(textoADesencriptar[i]) === -1){
                resultado += textoADesencriptar[i];
                i++;
            }else{
                resultado += textoADesencriptar[i];
                i += (letrasEncriptadas[letrasDeReferencia.indexOf(textoADesencriptar[i])]).length;
            };
        };
    };
    textAreaPrincipal.value = resultado;
    resultado = "";
    textareaResultado.setAttribute('hidden',true);
    btnCopiar.setAttribute('hidden',true);
    textareaResultado.value = '';
    subtituloResultado.removeAttribute('hidden');
    parrafoResultado.removeAttribute('hidden');
    imagenResultado.removeAttribute('hidden');
    // btnDesencriptar.setAttribute('disabled',true);
    textAreaPrincipal.classList.add('flash');

    return;
};