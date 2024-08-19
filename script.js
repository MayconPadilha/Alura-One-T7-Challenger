
function criptografar(){
    document.getElementById('semMensagem').style.display = "none";

    let texto = document.getElementById('textoDescriptografado').value;
    console.log(texto);
    
    let textoTradutor = document.getElementById('textoTradutor');
    document.getElementById('textoTradutor').style.display = "flex";

    textoTradutor.innerHTML = `<p>${texto}</p><button>Copiar</button>`;
}

function descriptografar(){
    document.getElementById('semMensagem').style.display = "none";

    let texto = document.getElementById('textoDescriptografado').value;
    console.log(texto);
    
    let textoTradutor = document.getElementById('textoTradutor');
    document.getElementById('textoTradutor').style.display = "flex";

    textoTradutor.innerHTML = `<p>${texto}</p><button>Copiar</button>`;
}